import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
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
  submitForm() {
    if (this.institutionForm.valid) {
      console.log('form values => ', this.institutionForm.value);
      const values = this.institutionForm.value;
      client
        .mutate({
          mutation: mutations.CreateInstitution,
          variables: {
            input: values,
          },
        })
        .then((res: any) => {
          console.log('response after creation', res);
          this.institutionForm.reset();
          this.store.dispatch(
            new ShowNotificationAction({
              message: 'Institution created successfully!',
            })
          );
        })
        .catch((err) => {
          console.log(err);
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
