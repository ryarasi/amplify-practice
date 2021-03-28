import {
  Component,
  ChangeDetectorRef,
  SimpleChanges,
  NgZone,
} from '@angular/core';
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

  constructor(
    private ref: ChangeDetectorRef,
    public dialog: MatDialog,
    private ngZone: NgZone
  ) {
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
      console.log('auth state has changed!');
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      if (this.authState === 'signedin' && this.user) {
        console.log('Closing all dialogs from login.component.ts');
        this.closeDialog();
      }
      this.ref.detectChanges();
    });
  }

  closeDialog() {
    this.ngZone.run(() => {
      this.dialog.closeAll();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
