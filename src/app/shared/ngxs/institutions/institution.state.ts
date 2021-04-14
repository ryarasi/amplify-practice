import { State, Action, Selector, Store, StateContext } from '@ngxs/store';
import {
  defaultInstitutionState,
  InstitutionStateModel,
  emptyInstitutionFormRecord,
} from './institution.model';
import {
  CreateInstitution,
  FetchInstitutions,
  GetInstitution,
  SetupInstitutionForm,
} from './institution.actions';
import { Injectable } from '@angular/core';
import { client } from '../../api/appsync.service';
import * as queries from './../../../../graphql/queries.graphql';
import * as mutations from './../../../../graphql/mutations.graphql';
import { ShowNotificationAction } from '../notifications/notification.actions';
import { ToggleLoadingScreen } from '../loading/loading.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Institution } from 'src/app/API.service';

@State<InstitutionStateModel>({
  name: 'institutionState',
  defaults: defaultInstitutionState,
})
@Injectable()
export class InstitutionState {
  constructor(private store: Store, private fb: FormBuilder) {}

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
  static getForm(state: InstitutionStateModel) {
    console.log('state.institutionFormGroup', state.institutionFormGroup);

    const institutionFormGroup = state.institutionFormGroup;

    return institutionFormGroup;
  }

  @Selector()
  static getInstitutionFormRecord(state: InstitutionStateModel) {
    return state.institutionFormRecord;
  }

  setupInstitutionFormGroup = (
    institutionFormRecord: Institution = emptyInstitutionFormRecord
  ): FormGroup => {
    return this.fb.group({
      id: [institutionFormRecord.id],
      name: [institutionFormRecord.name, Validators.required],
      location: [institutionFormRecord.location, Validators.required],
      city: [institutionFormRecord.city, Validators.required],
      website: [institutionFormRecord.website],
      phone: [institutionFormRecord.phone],
      logo: [institutionFormRecord.logo],
      bio: [institutionFormRecord.bio],
    });
  };

  @Action(SetupInstitutionForm)
  setupInstitutionForm({
    getState,
    patchState,
  }: StateContext<InstitutionStateModel>) {
    const state = getState();
    const { institutionFormRecord } = state;
    const institutionFormGroup = this.setupInstitutionFormGroup(
      institutionFormRecord
    );
    patchState({ institutionFormGroup });
  }

  @Action(CreateInstitution)
  createInstitution(
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
          formSubmitting = false;
          form.reset();
          formDirective.resetForm();
          patchState({ formSubmitting });
          this.store.dispatch(new FetchInstitutions());
          this.store.dispatch(
            new ShowNotificationAction({
              message: 'Form submitted successfully!',
            })
          );
          this.store.dispatch(new FetchInstitutions());
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
          this.store.dispatch(new SetupInstitutionForm());
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

  @Action(FetchInstitutions)
  fetchInstitutions({
    getState,
    patchState,
  }: StateContext<InstitutionStateModel>) {
    const state = getState();
    let { institutions, isFetching, errorFetching } = state;
    isFetching = true;
    errorFetching = false;
    patchState({ isFetching, errorFetching });
    client
      .query({
        query: queries.ListInstitutions,
      })
      .then((res: any) => {
        isFetching = false;
        const institutions = res.data.listInstitutions.items;
        patchState({ institutions, isFetching });
      })
      .catch((err) => {
        isFetching = false;
        errorFetching = true;
        institutions = [];
        patchState({ institutions, isFetching, errorFetching });
      });
  }
}
