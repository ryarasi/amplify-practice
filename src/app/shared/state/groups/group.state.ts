import { State, Action, Selector, Store, StateContext } from '@ngxs/store';
import {
  defaultGroupState,
  emptyGroupFormRecord,
  GroupStateModel,
} from './group.model';
import {
  CreateGroup,
  DeleteGroup,
  FetchGroups,
  ForceRefetchGroups,
  GetGroup,
} from './group.actions';
import { Injectable } from '@angular/core';
import { client } from '../../api/appsync.service';
import * as queries from './../../../../graphql/queries.graphql';
import * as mutations from './../../../../graphql/mutations.graphql';
import { ShowNotificationAction } from '../notifications/notification.actions';
import { ToggleLoadingScreen } from '../loading/loading.actions';
import { MatSelectOption } from '../../common/models';

@State<GroupStateModel>({
  name: 'groupState',
  defaults: defaultGroupState,
})
@Injectable()
export class GroupState {
  constructor(private store: Store) {}

  @Selector()
  static listGroups(state: GroupStateModel) {
    return state.groups;
  }

  @Selector()
  static listGroupOptions(state: GroupStateModel): MatSelectOption[] {
    return state.groups.map((g) => {
      return { value: g.id, label: g.name };
    });
  }

  @Selector()
  static isFetching(state: GroupStateModel) {
    return state.isFetching;
  }

  @Selector()
  static errorFetching(state: GroupStateModel) {
    return state.errorFetching;
  }

  @Selector()
  static formSubmitting(state: GroupStateModel) {
    return state.formSubmitting;
  }

  @Selector()
  static errorSubmitting(state: GroupStateModel) {
    return state.errorSubmitting;
  }

  @Selector()
  static getGroupFormRecord(state: GroupStateModel) {
    return state.groupFormRecord;
  }

  @Action(ForceRefetchGroups)
  fetchGroupsFromNetwork({ patchState }: StateContext<GroupStateModel>) {
    patchState({ fetchPolicy: 'network-only' });
  }

  @Action(FetchGroups)
  fetchGroups({ getState, patchState }: StateContext<GroupStateModel>) {
    const state = getState();
    let { groups, isFetching, errorFetching, fetchPolicy } = state;
    isFetching = true;
    errorFetching = false;
    patchState({ isFetching, errorFetching, groups });
    client
      .query({
        query: queries.ListGroups,
        fetchPolicy: fetchPolicy,
      })
      .then((res: any) => {
        isFetching = false;
        const groups = res.data.listGroups.items;
        fetchPolicy = null;
        patchState({ groups, isFetching, fetchPolicy });
      })
      .catch((err) => {
        isFetching = false;
        errorFetching = true;
        groups = [];
        patchState({ groups, isFetching, errorFetching });
      });
  }

  @Action(GetGroup)
  getGroup(
    { getState, patchState }: StateContext<GroupStateModel>,
    { payload }: GetGroup
  ) {
    const { id } = payload;
    const state = getState();
    const groupFound = state.groups.find((i) => i.id == id);
    if (groupFound) {
      patchState({ groupFormRecord: groupFound });
    } else {
      this.store.dispatch(
        new ToggleLoadingScreen({
          showLoadingScreen: true,
          message: 'Fetching the group...',
        })
      );
      client
        .query({
          query: queries.GetGroup,
          variables: {
            id,
          },
        })
        .then((res: any) => {
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          const groupFormRecord = res.data.getGroup;
          patchState({ groupFormRecord });
        })
        .catch((res: any) => {
          console.error(res);
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          this.store.dispatch(
            new ShowNotificationAction({
              message:
                'There was an error in fetching the group! Try again later.',
            })
          );
        });
    }
  }

  @Action(CreateGroup)
  createUpdateGroup(
    { getState, patchState }: StateContext<GroupStateModel>,
    { payload }: CreateGroup
  ) {
    const state = getState();
    const { form, formDirective, institutionOptions } = payload;
    let { formSubmitting } = state;
    if (form.valid) {
      formSubmitting = true;
      const values = form.value;
      const updateForm = values.id ? true : false;
      patchState({ formSubmitting });
      if (updateForm) {
        client
          .mutate({
            mutation: updateForm
              ? mutations.UpdateGroup
              : mutations.CreateGroup,
            variables: {
              input: values,
            },
          })
          .then((res: any) => {
            formSubmitting = false;
            form.reset();
            formDirective.resetForm();
            patchState({
              groupFormRecord: emptyGroupFormRecord,
              formSubmitting,
            });
            this.store.dispatch(new ForceRefetchGroups());
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
        const newValues = {
          name: values.name,
          type: values.type,
          institution: { id: values.institution },
        };
        client
          .mutate({
            mutation: mutations.CreateGroup,

            variables: {
              input: newValues,
            },
          })
          .then((res: any) => {
            formSubmitting = false;
            form.reset();
            formDirective.resetForm();
            patchState({
              groupFormRecord: emptyGroupFormRecord,
              formSubmitting,
            });
            this.store.dispatch(new ForceRefetchGroups());
            this.store.dispatch(
              new ShowNotificationAction({
                message: 'Form submitted successfully!',
              })
            );
          })
          .catch((err) => {
            console.error('Error while creating group', err, values);
            formSubmitting = false;
            patchState({ formSubmitting });
            this.store.dispatch(
              new ShowNotificationAction({
                message: 'There was an error in submitting your form!',
              })
            );
          });
      }
    } else {
      this.store.dispatch(
        new ShowNotificationAction({
          message:
            'Please fill all required fields before attempting to submit!',
        })
      );
    }
  }

  @Action(DeleteGroup)
  deleteGroup({ payload }: GetGroup) {
    const { id } = payload;

    this.store.dispatch(
      new ToggleLoadingScreen({
        showLoadingScreen: true,
        message: 'Deleting the group...',
      })
    );
    client
      .mutate({
        mutation: mutations.DeleteGroup,
        variables: {
          input: {
            id,
          },
        },
      })
      .then((res: any) => {
        console.log(res);
        this.store.dispatch(new ForceRefetchGroups());
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
          })
        );
        this.store.dispatch(
          new ShowNotificationAction({
            message: `The group with name ${res?.data?.deleteGroup?.name} was successfully deleted`,
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
            message: `Something went wrong while attempting to delete the group. It may not have been deleted.`,
          })
        );
      });
  }
}
