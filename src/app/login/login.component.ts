import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';
import { FormFieldTypes } from '@aws-amplify/ui-components/dist/types/components/amplify-auth-fields/amplify-auth-fields-interface';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  formFields: FormFieldTypes;

  constructor(private ref: ChangeDetectorRef, private dialog: MatDialog) {
    this.formFields = [
      {
        type: 'email',
        label: 'Email',
        placeholder: 'Email ID',
        required: true,
      },
      {
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        required: true,
      },
      {
        type: 'phone_number',
        label: 'Phone',
        placeholder: 'Phone number',
        required: false,
      },
    ];
  }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
