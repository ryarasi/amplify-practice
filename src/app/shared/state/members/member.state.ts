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
import { CognitoGroups, MatSelectOption } from '../../common/models';
import {
  getOptionLabel,
  setNextToken,
  updatePaginationObject,
} from './../../common/functions';
import { defaultPageSize } from '../../abstract/master-grid/table.model';
import { Member } from 'src/app/API.service';

@State<MemberStateModel>({
  name: 'memberState',
  defaults: defaultMemberState,
})
@Injectable()
export class MemberState {
  constructor(private store: Store) {}

  @Selector()
  static listMembers(state: MemberStateModel): Member[] {
    return state.members;
  }

  @Selector()
  static paginationObject(state: MemberStateModel): Object {
    return state.paginationObject;
  }

  @Selector()
  static listMemberOptions(state: MemberStateModel): MatSelectOption[] {
    return state.members.map((m) => {
      return { value: m.id, label: m.name };
    });
  }

  @Selector()
  static isFetching(state: MemberStateModel): boolean {
    return state.isFetching;
  }

  @Selector()
  static errorFetching(state: MemberStateModel): boolean {
    return state.errorFetching;
  }

  @Selector()
  static formSubmitting(state: MemberStateModel): boolean {
    return state.formSubmitting;
  }

  @Selector()
  static errorSubmitting(state: MemberStateModel): boolean {
    return state.errorSubmitting;
  }

  @Selector()
  static getMemberFormRecord(state: MemberStateModel): Member {
    return state.memberFormRecord;
  }

  @Action(ForceRefetchMembers)
  fetchMembersFromNetwork({ patchState }: StateContext<MemberStateModel>) {
    patchState({ fetchPolicy: 'network-only' });
  }

  @Action(FetchMembers)
  fetchMembers(
    { getState, patchState }: StateContext<MemberStateModel>,
    { payload }: FetchMembers
  ) {
    const { searchParams } = payload;
    console.log('search params from members state ', searchParams);
    const state = getState();
    let {
      members,
      isFetching,
      errorFetching,
      fetchPolicy,
      paginationObject,
    } = state;
    isFetching = true;
    errorFetching = false;
    patchState({ isFetching, errorFetching, members });

    // Constructing the filter object
    let filter = {
      ...searchParams.columnFilters,
      searchField: searchParams?.searchQuery
        ? { contains: searchParams.searchQuery.toLowerCase() }
        : null,
    };

    filter = Object.keys(filter).length ? filter : null;
    /* updating the paginationObject with the incoming new page number
    This is necessary for setting the right token
    */
    paginationObject = {
      ...paginationObject,
      pageIndex: searchParams?.pageNumber
        ? searchParams?.pageNumber
        : paginationObject.pageIndex,
    };
    // Constructing the variables to be used in the Graphql Query
    const variables = {
      filter,
      limit: searchParams?.pageSize ? searchParams?.pageSize : defaultPageSize,
      // limit: 1,
      nextToken: setNextToken(paginationObject),
    };
    console.log('variables for the query => ', variables);
    client
      .query({
        query: queries.ListMembers,
        fetchPolicy: fetchPolicy,
      })
      .then((res: any) => {
        isFetching = false;
        const members = res.data.listMembers.items;
        const returnedNextToken = res.data.listInstitutions.nextToken;
        fetchPolicy = null;
        paginationObject = updatePaginationObject(
          paginationObject,
          returnedNextToken
        );
        patchState({ members, isFetching, fetchPolicy, paginationObject });
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
    const { form, formDirective, institutionOptions } = payload;
    let { formSubmitting } = state;
    if (form.valid) {
      formSubmitting = true;
      const values = form.value;
      const updateForm = values.id ? true : false;
      patchState({ formSubmitting });
      if (updateForm) {
        // client
        //   .mutate({
        //     mutation: updateForm
        //       ? mutations.UpdateMember
        //       : mutations.CreateMember,
        //     variables: {
        //       input: values,
        //     },
        //   })
        //   .then((res: any) => {
        //     formSubmitting = false;
        //     form.reset();
        //     formDirective.resetForm();
        //     patchState({
        //       memberFormRecord: emptyMemberFormRecord,
        //       formSubmitting,
        //     });
        //     this.store.dispatch(new ForceRefetchMembers());
        //     this.store.dispatch(
        //       new ShowNotificationAction({
        //         message: 'Form submitted successfully!',
        //       })
        //     );
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //     formSubmitting = false;
        //     patchState({ formSubmitting });
        //     this.store.dispatch(
        //       new ShowNotificationAction({
        //         message: 'There was an error in submitting your form!',
        //       })
        //     );
        //   });
      } else {
        // Create method for member

        const type = values.type;
        const title = constructMemberTitle(values, institutionOptions);
        const bio = values.bio ? values.bio : "I'm new at Shuddhi Vidhya!";
        client
          .mutate({
            mutation: mutations.AddMember,
            variables: {
              name: values.name,
              username: 'zeebface',
              email: values.email,
              institution: values.institution,
              type,
              title,
              bio,
            },
          })
          .then((res: any) => {
            if (res?.User?.Attributes[0]?.sub) {
              // executing the following only when we receive the created user's ID in the response
              formSubmitting = false;
              form.reset();
              formDirective.resetForm();
              patchState({
                memberFormRecord: emptyMemberFormRecord,
                formSubmitting,
              });
              this.store.dispatch(new ForceRefetchMembers({}));
              this.store.dispatch(
                new ShowNotificationAction({
                  message: 'Form submitted successfully!',
                })
              );
            } else {
              throw res;
            }
          })
          .catch((err) => {
            console.error('Error while creating member', err);
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
        this.store.dispatch(new ForceRefetchMembers({}));
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

const constructMemberTitle = (
  values,
  institutionOptions: MatSelectOption[]
): string => {
  if (values.title) {
    return values.title;
  } else {
    const institutionLabel = getOptionLabel(
      values.institution,
      institutionOptions
    );
    switch (values.type) {
      case CognitoGroups.ADMIN_GROUP || CognitoGroups.INSTITUTION_ADMIN_GROUP:
        return `Administrator at ${institutionLabel}`;
      case CognitoGroups.CLASS_ADMIN_GROUP:
        return `Class admin at ${institutionLabel}`;
      case CognitoGroups.LEARNER_GROUP:
        return `Learner from ${institutionLabel}`;
      case CognitoGroups.INSTRUCTOR_GROUP:
        return `Instructor at ${institutionLabel}`;
      default:
        return `Member of ${institutionLabel}`;
    }
  }
};
