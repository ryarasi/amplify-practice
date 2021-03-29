import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';
import { environment } from 'src/environments/environment';
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
  loggedIn: Boolean;
  cognitoClientId = environment.cognitoClientId;
  cognitoCallbackURL = environment.cognitoCallbackURL;
  cognitoDomainName = environment.cognitoDomainName;
  loginurl = `https://${this.cognitoDomainName}/login?response_type=code&client_id=${this.cognitoClientId}&redirect_uri=${this.cognitoCallbackURL}`;

  constructor(
    private ref: ChangeDetectorRef,
    public dialog: MatDialog,
    private router: Router
  ) {
    console.log('loginURL ', this.loginurl);
    console.log('this.logged in in constructor', {
      loggedIn: this.loggedIn,
      user: this.user,
      authState: this.authState,
    });
  }

  showLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    console.log('this.logged in in the ngOnInit', {
      loggedIn: this.loggedIn,
      user: this.user,
      authState: this.authState,
    });
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.loggedIn = this.authState === 'signedin' && this.user ? true : false;
      console.log('this.logged in in the ngOnInit', {
        loggedIn: this.loggedIn,
        user: this.user,
        authState: this.authState,
      });
      if (this.loggedIn) {
        this.router.navigateByUrl('dashboard');
      } else {
        this.router.navigateByUrl('');
      }
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
