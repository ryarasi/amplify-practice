import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';
import { FormFieldTypes } from '@aws-amplify/ui-components/dist/types/components/amplify-auth-fields/amplify-auth-fields-interface';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  formFields: FormFieldTypes;

  constructor(private ref: ChangeDetectorRef, public dialog: MatDialog) {
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

  showLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
