import { State, Action, Selector, Store, StateContext } from '@ngxs/store';
import {
  defaultAnnouncementState,
  emptyAnnouncementFormRecord,
  AnnouncementStateModel,
} from './announcement.model';
import {
  CreateAnnouncement,
  DeleteAnnouncement,
  FetchAnnouncements,
  ForceRefetchAnnouncements,
  GetAnnouncement,
} from './announcement.actions';
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
} from '../../common/functions';
import { defaultPageSize } from '../../abstract/master-grid/table.model';
import { Announcement } from 'src/app/API.service';

@State<AnnouncementStateModel>({
  name: 'memberState',
  defaults: defaultAnnouncementState,
})
@Injectable()
export class AnnouncementState {
  constructor(private store: Store) {}

  @Selector()
  static listAnnouncements(state: AnnouncementStateModel): Announcement[] {
    return state.members;
  }

  @Selector()
  static paginationObject(state: AnnouncementStateModel): Object {
    return state.paginationObject;
  }

  @Selector()
  static listAnnouncementOptions(
    state: AnnouncementStateModel
  ): MatSelectOption[] {
    return state.members.map((m) => {
      return { value: m.id, label: m.title };
    });
  }

  @Selector()
  static isFetching(state: AnnouncementStateModel): boolean {
    return state.isFetching;
  }

  @Selector()
  static errorFetching(state: AnnouncementStateModel): boolean {
    return state.errorFetching;
  }

  @Selector()
  static formSubmitting(state: AnnouncementStateModel): boolean {
    return state.formSubmitting;
  }

  @Selector()
  static errorSubmitting(state: AnnouncementStateModel): boolean {
    return state.errorSubmitting;
  }

  @Selector()
  static getAnnouncementFormRecord(
    state: AnnouncementStateModel
  ): Announcement {
    return state.memberFormRecord;
  }

  @Action(ForceRefetchAnnouncements)
  fetchAnnouncementsFromNetwork({
    patchState,
  }: StateContext<AnnouncementStateModel>) {
    patchState({ fetchPolicy: 'network-only' });
  }

  @Action(FetchAnnouncements)
  fetchAnnouncements(
    { getState, patchState }: StateContext<AnnouncementStateModel>,
    { payload }: FetchAnnouncements
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
        query: queries.ListAnnouncements,
        fetchPolicy: fetchPolicy,
      })
      .then((res: any) => {
        isFetching = false;
        const members = res.data.listAnnouncements.items;
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

  @Action(GetAnnouncement)
  getAnnouncement(
    { getState, patchState }: StateContext<AnnouncementStateModel>,
    { payload }: GetAnnouncement
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
          query: queries.GetAnnouncement,
          variables: {
            id,
          },
        })
        .then((res: any) => {
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          const memberFormRecord = res.data.getAnnouncement;
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

  @Action(CreateAnnouncement)
  createUpdateAnnouncement(
    { getState, patchState }: StateContext<AnnouncementStateModel>,
    { payload }: CreateAnnouncement
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
        //       ? mutations.UpdateAnnouncement
        //       : mutations.CreateAnnouncement,
        //     variables: {
        //       input: values,
        //     },
        //   })
        //   .then((res: any) => {
        //     formSubmitting = false;
        //     form.reset();
        //     formDirective.resetForm();
        //     patchState({
        //       memberFormRecord: emptyAnnouncementFormRecord,
        //       formSubmitting,
        //     });
        //     this.store.dispatch(new ForceRefetchAnnouncements());
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
        const title = constructAnnouncementTitle(values, institutionOptions);
        const bio = values.bio ? values.bio : "I'm new at Shuddhi Vidhya!";
        client
          .mutate({
            mutation: mutations.AddAnnouncement,
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
                memberFormRecord: emptyAnnouncementFormRecord,
                formSubmitting,
              });
              this.store.dispatch(new ForceRefetchAnnouncements({}));
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

  @Action(DeleteAnnouncement)
  deleteAnnouncement({ payload }: GetAnnouncement) {
    const { id } = payload;

    this.store.dispatch(
      new ToggleLoadingScreen({
        showLoadingScreen: true,
        message: 'Deleting the member...',
      })
    );
    client
      .mutate({
        mutation: mutations.DeleteAnnouncement,
        variables: {
          input: {
            id,
          },
        },
      })
      .then((res: any) => {
        console.log(res);
        this.store.dispatch(new ForceRefetchAnnouncements({}));
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
          })
        );
        this.store.dispatch(
          new ShowNotificationAction({
            message: `The member with name ${res?.data?.deleteAnnouncement?.name} was successfully deleted`,
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

const constructAnnouncementTitle = (
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
        return `Announcement of ${institutionLabel}`;
    }
  }
};
