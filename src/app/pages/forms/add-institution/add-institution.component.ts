import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import * as mutations from './../../../../graphql/mutations.graphql';
import { client } from 'src/app/shared/api/appsync.service';
import { Store } from '@ngxs/store';
import { ShowNotificationAction } from 'src/app/shared/ngxs/notifications/notification.actions';

@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: [
    './add-institution.component.scss',
    './../../../shared/styles/shared-styles.css',
  ],
})
export class AddInstitutionComponent implements OnInit {
  formSubmitting: boolean = false;
  institutionForm = this.fb.group({
    name: [null, Validators.required],
    location: [null, Validators.required],
    city: [null, Validators.required],
    website: [null],
    phone: [null],
    logo: [null],
    bio: [null],
  });
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
  submitForm(form: any, formDirective: FormGroupDirective) {
    if (this.institutionForm.valid) {
      this.formSubmitting = true;
      const values = form.value;
      client
        .mutate({
          mutation: mutations.CreateInstitution,
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
              message: 'Institution created successfully!',
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
