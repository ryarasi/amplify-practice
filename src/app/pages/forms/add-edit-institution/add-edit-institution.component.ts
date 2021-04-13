import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import * as mutations from './../../../../graphql/mutations.graphql';
import * as queries from './../../../../graphql/queries.graphql';
import { client } from 'src/app/shared/api/appsync.service';
import { Store } from '@ngxs/store';
import { ShowNotificationAction } from 'src/app/shared/ngxs/notifications/notification.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { ToggleLoadingScreen } from 'src/app/shared/ngxs/loading/loading.actions';

// New institution object for setting up empty form
const newInstitution = {
  id: null,
  name: null,
  location: null,
  city: null,
  website: null,
  phone: null,
  logo: null,
  bio: null,
};

@Component({
  selector: 'app-add-edit-institution',
  templateUrl: './add-edit-institution.component.html',
  styleUrls: [
    './add-edit-institution.component.scss',
    './../../../shared/styles/shared-styles.css',
  ],
})
export class AddEditInstitutionComponent implements OnInit {
  formSubmitting: boolean = false;
  params: object = {};
  institution;
  institutionForm;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.setupForm(newInstitution);
  }

  setupForm(institution) {
    this.institutionForm = this.fb.group({
      id: [institution.id],
      name: [institution.name, Validators.required],
      location: [institution.location, Validators.required],
      city: [institution.city, Validators.required],
      website: [institution.website],
      phone: [institution.phone],
      logo: [institution.logo],
      bio: [institution.bio],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.params = params;
      const id = params['id'];
      if (id) {
        this.store.dispatch(
          new ToggleLoadingScreen({
            showLoadingScreen: true,
            message: 'Fetching the institution...',
          })
        );
        this.fetchInstitution(id);
      }
    });
  }

  goBack() {
    this.location.back();
  }
  fetchInstitution(id) {
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
        this.institution = res.data.getInstitution;
        this.setupForm(this.institution);
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
  submitForm(form: any, formDirective: FormGroupDirective) {
    if (this.institutionForm.valid) {
      this.formSubmitting = true;
      const values = form.value;
      const updateForm = this.institution.id ? true : false;
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
          this.formSubmitting = false;
          form.reset();
          formDirective.resetForm();
          this.store.dispatch(
            new ShowNotificationAction({
              message: 'Form submitted successfully!',
            })
          );
        })
        .catch((err) => {
          console.error(err);
          this.formSubmitting = false;
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
}
