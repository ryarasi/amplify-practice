import { State, Action, Selector, Store, StateContext } from '@ngxs/store';
import {
  defaultInstitutionState,
  emptyInstitutionFormRecord,
  InstitutionStateModel,
} from './institution.model';
import {
  CreateInstitution,
  DeleteInstitution,
  FetchInstitutions,
  ForceRefetchInstitutions,
  GetInstitution,
} from './institution.actions';
import { Injectable } from '@angular/core';
import { client } from '../../api/appsync.service';
import * as queries from './../../../../graphql/queries.graphql';
import * as mutations from './../../../../graphql/mutations.graphql';
import { ShowNotificationAction } from '../notifications/notification.actions';
import { ToggleLoadingScreen } from '../loading/loading.actions';
@State<InstitutionStateModel>({
  name: 'institutionState',
  defaults: defaultInstitutionState,
})
@Injectable()
export class InstitutionState {
  constructor(private store: Store) {}

  @Selector()
  static listInstitutions(state: InstitutionStateModel) {
    return state.institutions;
  }

  @Selector()
  static isFetching(state: InstitutionStateModel) {
    return state.isFetching;
  }

  @Selector()
  static errorFetching(state: InstitutionStateModel) {
    return state.errorFetching;
  }

  @Selector()
  static formSubmitting(state: InstitutionStateModel) {
    return state.formSubmitting;
  }

  @Selector()
  static errorSubmitting(state: InstitutionStateModel) {
    return state.errorSubmitting;
  }

  @Selector()
  static getInstitutionFormRecord(state: InstitutionStateModel) {
    return state.institutionFormRecord;
  }

  @Action(ForceRefetchInstitutions)
  fetchClassesFromNetwork({ patchState }: StateContext<InstitutionStateModel>) {
    patchState({ fetchPolicy: 'network-only' });
    this.store.dispatch(new FetchInstitutions());
  }

  @Action(FetchInstitutions)
  fetchInstitutions({
    getState,
    patchState,
  }: StateContext<InstitutionStateModel>) {
    console.log('Fetching institutions...');
    const state = getState();
    let { institutions, isFetching, errorFetching, fetchPolicy } = state;
    isFetching = true;
    errorFetching = false;
    patchState({ isFetching, errorFetching, institutions });
    client
      .query({
        query: queries.ListInstitutions,
        fetchPolicy,
      })
      .then((res: any) => {
        isFetching = false;
        const institutions = res.data.listInstitutions.items;
        console.log('Fetched institutions ', institutions);
        fetchPolicy = null;
        patchState({ institutions, isFetching, fetchPolicy });
      })
      .catch((err) => {
        isFetching = false;
        errorFetching = true;
        institutions = [];
        patchState({ institutions, isFetching, errorFetching });
      });
  }

  @Action(GetInstitution)
  getInstitution(
    { getState, patchState }: StateContext<InstitutionStateModel>,
    { payload }: GetInstitution
  ) {
    const { id } = payload;
    const state = getState();
    const institution = state.institutions.find((i) => i.id == id);
    if (institution) {
      patchState({ institutionFormRecord: institution });
    } else {
      this.store.dispatch(
        new ToggleLoadingScreen({
          showLoadingScreen: true,
          message: 'Fetching the institution...',
        })
      );
      client
        .query({
          query: queries.GetInstitution,
          variables: {
            id,
          },
        })
        .then((res: any) => {
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          console.log('res from institution fetch', res);
          const institutionFormRecord = res.data.getInstitution;
          patchState({ institutionFormRecord });
        })
        .catch((res: any) => {
          console.error(res);
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          this.store.dispatch(
            new ShowNotificationAction({
              message:
                'There was an error in fetching the institution! Try again later.',
            })
          );
        });
    }
  }

  @Action(CreateInstitution)
  createUpdateInstitution(
    { getState, patchState }: StateContext<InstitutionStateModel>,
    { payload }: CreateInstitution
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
            ? mutations.UpdateInstitution
            : mutations.CreateInstitution,
          variables: {
            input: values,
          },
        })
        .then((res: any) => {
          this.store.dispatch(new ForceRefetchInstitutions());
          formSubmitting = false;
          patchState({ institutionFormRecord: emptyInstitutionFormRecord });
          form.reset();
          formDirective.resetForm();
          patchState({ formSubmitting });
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

  @Action(DeleteInstitution)
  deleteInstitution(
    { getState, patchState }: StateContext<InstitutionStateModel>,
    { payload }: GetInstitution
  ) {
    const { id } = payload;
    this.store.dispatch(
      new ToggleLoadingScreen({
        showLoadingScreen: true,
        message: 'Deleting the institution...',
      })
    );
    client
      .mutate({
        mutation: mutations.DeleteInstitution,
        variables: {
          input: {
            id,
          },
        },
      })
      .then((res: any) => {
        this.store.dispatch(new ForceRefetchInstitutions());
        console.log(res);
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
          })
        );
        this.store.dispatch(
          new ShowNotificationAction({
            message: `The institution with name ${res?.data?.deleteInstitution?.name} was successfully deleted`,
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
            message: `Something went wrong while attempting to delete the institution. It may not have been deleted.`,
          })
        );
      });
  }
}
