import { State, Action, Selector, Store, StateContext } from '@ngxs/store';
import {
  defaultClassState,
  emptyClassFormRecord,
  ClassStateModel,
} from './class.model';
import {
  CreateClass,
  DeleteClass,
  FetchClasses,
  GetClass,
} from './class.actions';
import { Injectable } from '@angular/core';
import { client } from '../../api/appsync.service';
import * as queries from './../../../../graphql/queries.graphql';
import * as mutations from './../../../../graphql/mutations.graphql';
import { ShowNotificationAction } from '../notifications/notification.actions';
import { ToggleLoadingScreen } from '../loading/loading.actions';
@State<ClassStateModel>({
  name: 'classState',
  defaults: defaultClassState,
})
@Injectable()
export class ClassState {
  constructor(private store: Store) {}

  @Selector()
  static listClasses(state: ClassStateModel) {
    return state.classes;
  }

  @Selector()
  static isFetching(state: ClassStateModel) {
    return state.isFetching;
  }

  @Selector()
  static errorFetching(state: ClassStateModel) {
    return state.errorFetching;
  }

  @Selector()
  static formSubmitting(state: ClassStateModel) {
    return state.formSubmitting;
  }

  @Selector()
  static errorSubmitting(state: ClassStateModel) {
    return state.errorSubmitting;
  }

  @Selector()
  static getClassFormRecord(state: ClassStateModel) {
    return state.classFormRecord;
  }

  @Action(FetchClasses)
  fetchClasss({ getState, patchState }: StateContext<ClassStateModel>) {
    console.log('Fetching classes...');
    const state = getState();
    let { classes, isFetching, errorFetching } = state;
    isFetching = true;
    errorFetching = false;
    patchState({ isFetching, errorFetching, classes });
    client
      .query({
        query: queries.ListClasss,
      })
      .then((res: any) => {
        isFetching = false;
        const classes = res.data.listClasss.items;
        console.log('Fetched classes ', classes);
        patchState({ classes, isFetching });
      })
      .catch((err) => {
        isFetching = false;
        errorFetching = true;
        classes = [];
        patchState({ classes, isFetching, errorFetching });
      });
  }

  @Action(GetClass)
  getClass(
    { getState, patchState }: StateContext<ClassStateModel>,
    { payload }: GetClass
  ) {
    const { id } = payload;
    const state = getState();
    const classFound = state.classes.find((i) => i.id == id);
    if (classFound) {
      patchState({ classFormRecord: classFound });
    } else {
      this.store.dispatch(
        new ToggleLoadingScreen({
          showLoadingScreen: true,
          message: 'Fetching the class...',
        })
      );
      client
        .query({
          query: queries.GetClass,
          variables: {
            id,
          },
        })
        .then((res: any) => {
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          console.log('res from class fetch', res);
          const classFormRecord = res.data.getClass;
          patchState({ classFormRecord });
        })
        .catch((res: any) => {
          console.error(res);
          this.store.dispatch(
            new ToggleLoadingScreen({ showLoadingScreen: false })
          );
          this.store.dispatch(
            new ShowNotificationAction({
              message:
                'There was an error in fetching the class! Try again later.',
            })
          );
        });
    }
  }

  @Action(CreateClass)
  createUpdateClass(
    { getState, patchState }: StateContext<ClassStateModel>,
    { payload }: CreateClass
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
          mutation: updateForm ? mutations.UpdateClass : mutations.CreateClass,
          variables: {
            input: values,
          },
        })
        .then((res: any) => {
          formSubmitting = false;
          patchState({ classFormRecord: emptyClassFormRecord });
          form.reset();
          formDirective.resetForm();
          patchState({ formSubmitting });
          this.store.dispatch(new FetchClasses());
          this.store.dispatch(
            new ShowNotificationAction({
              message: 'Form submitted successfully!',
            })
          );

          this.store.dispatch(new FetchClasses());
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

  @Action(DeleteClass)
  deleteClass(
    { getState, patchState }: StateContext<ClassStateModel>,
    { payload }: GetClass
  ) {
    const { id } = payload;
    this.store.dispatch(
      new ToggleLoadingScreen({
        showLoadingScreen: true,
        message: 'Deleting the class...',
      })
    );
    client
      .mutate({
        mutation: mutations.DeleteClass,
        variables: {
          input: {
            id,
          },
        },
      })
      .then((res: any) => {
        console.log(res);
        this.store.dispatch(new FetchClasses());
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: false,
          })
        );
        this.store.dispatch(
          new ShowNotificationAction({
            message: `The class with name ${res?.data?.deleteClass?.name} was successfully deleted`,
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
            message: `Something went wrong while attempting to delete the class. It may not have been deleted.`,
          })
        );
      });
  }
}
