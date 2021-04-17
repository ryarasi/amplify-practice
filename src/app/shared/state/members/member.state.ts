import { State, Action, Selector, Store, StateContext } from '@ngxs/store';
import {
  defaultMemberState,
  emptyMemberFormRecord,
  MemberStateModel,
} from './member.model';
import {
  CreateMember,
  DeleteMember,
  FetchMembers,
  ForceRefetchMembers,
  GetMember,
} from './member.actions';
import { Injectable } from '@angular/core';
import { client } from '../../api/appsync.service';
import * as queries from './../../../../graphql/queries.graphql';
import * as mutations from './../../../../graphql/mutations.graphql';
import { ShowNotificationAction } from '../notifications/notification.actions';
import { ToggleLoadingScreen } from '../loading/loading.actions';
import awsmobile from 'src/aws-exports.js';

@State<MemberStateModel>({
  name: 'memberState',
  defaults: defaultMemberState,
})
@Injectable()
export class MemberState {
  constructor(private store: Store) {}

  @Selector()
  static listMembers(state: MemberStateModel) {
    return state.members;
  }

  @Selector()
  static isFetching(state: MemberStateModel) {
    return state.isFetching;
  }

  @Selector()
  static errorFetching(state: MemberStateModel) {
    return state.errorFetching;
  }

  @Selector()
  static formSubmitting(state: MemberStateModel) {
    return state.formSubmitting;
  }

  @Selector()
  static errorSubmitting(state: MemberStateModel) {
    return state.errorSubmitting;
  }

  @Selector()
  static getMemberFormRecord(state: MemberStateModel) {
    return state.memberFormRecord;
  }

  @Action(ForceRefetchMembers)
  fetchMembersFromNetwork({ patchState }: StateContext<MemberStateModel>) {
    patchState({ fetchPolicy: 'network-only' });
  }

  @Action(FetchMembers)
  fetchMembers({ getState, patchState }: StateContext<MemberStateModel>) {
    console.log('Fetching members...');
    const state = getState();
    let { members, isFetching, errorFetching, fetchPolicy } = state;
    isFetching = true;
    errorFetching = false;
    patchState({ isFetching, errorFetching, members });
    client
      .query({
        query: queries.ListMembers,
        fetchPolicy: fetchPolicy,
      })
      .then((res: any) => {
        isFetching = false;
        const members = res.data.listMembers.items;
        console.log('Fetched members ', members);
        fetchPolicy = null;
        patchState({ members, isFetching, fetchPolicy });
      })
      .catch((err) => {
        isFetching = false;
        errorFetching = true;
        members = [];
        patchState({ members, isFetching, errorFetching });
      });
  }

  @Action(GetMember)
  getMember(
    { getState, patchState }: StateContext<MemberStateModel>,
    { payload }: GetMember
  ) {
    const { id } = payload;
    const state = getState();
    const memberFound = state.members.find((i) => i.id == id);
    if (memberFound) {
      patchState({ memberFormRecord: memberFound });
    } else {
      this.store.dispatch(
        new ToggleLoadingScreen({
          showLoadingScreen: true,
          message: 'Fetching the member...',
        })
      );
      client
        .query({
          query: queries.GetMember,
          variables: {
            id,
          },
        })
        .then((res: any) => {
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          console.log('res from member fetch', res);
          const memberFormRecord = res.data.getMember;
          patchState({ memberFormRecord });
        })
        .catch((res: any) => {
          console.error(res);
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          this.store.dispatch(
            new ShowNotificationAction({
              message:
                'There was an error in fetching the member! Try again later.',
            })
          );
        });
    }
  }

  @Action(CreateMember)
  createUpdateMember(
    { getState, patchState }: StateContext<MemberStateModel>,
    { payload }: CreateMember
  ) {
    const state = getState();
    const { form, formDirective } = payload;
    let { formSubmitting } = state;
    if (form.valid) {
      formSubmitting = true;
      const values = form.value;
      const updateForm = values.id ? true : false;
      patchState({ formSubmitting });

      client
        .mutate({
          mutation: updateForm
            ? mutations.UpdateMember
            : mutations.CreateMember,
          variables: {
            input: values,
          },
        })
        .then((res: any) => {
          formSubmitting = false;
          form.reset();
          formDirective.resetForm();
          patchState({
            memberFormRecord: emptyMemberFormRecord,
            formSubmitting,
          });
          this.store.dispatch(new ForceRefetchMembers());
          this.store.dispatch(
            new ShowNotificationAction({
              message: 'Form submitted successfully!',
            })
          );
        })
        .catch((err) => {
          console.error(err);
          formSubmitting = false;
          patchState({ formSubmitting });
          this.store.dispatch(
            new ShowNotificationAction({
              message: 'There was an error in submitting your form!',
            })
          );
        });
    } else {
      this.store.dispatch(
        new ShowNotificationAction({
          message:
            'Please fill all required fields before attempting to submit!',
        })
      );
    }
  }

  @Action(DeleteMember)
  deleteMember({ payload }: GetMember) {
    const { id } = payload;

    this.store.dispatch(
      new ToggleLoadingScreen({
        showLoadingScreen: true,
        message: 'Deleting the member...',
      })
    );
    client
      .mutate({
        mutation: mutations.DeleteMember,
        variables: {
          input: {
            id,
          },
        },
      })
      .then((res: any) => {
        console.log(res);
        this.store.dispatch(new ForceRefetchMembers());
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
          })
        );
        this.store.dispatch(
          new ShowNotificationAction({
            message: `The member with name ${res?.data?.deleteMember?.name} was successfully deleted`,
          })
        );
      })
      .catch((err) => {
        console.log('Error while deleting ', err);
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
          })
        );
        this.store.dispatch(
          new ShowNotificationAction({
            message: `Something went wrong while attempting to delete the member. It may not have been deleted.`,
          })
        );
      });
  }
}
