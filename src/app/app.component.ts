import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amplify-angular-auth';
  cognitoClientId = environment.cognitoClientId;
  cognitoCallbackURL = environment.cognitoCallbackURL;
  cognitoDomainName = environment.cognitoDomainName;
  loginurl = `https://${this.cognitoDomainName}/login?response_type=code&client_id=${this.cognitoClientId}&redirect_uri=${this.cognitoCallbackURL}`;
  isUserLoggedIn: boolean = false;
  userName: string = '';

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        this.isUserLoggedIn = true;
        this.userName = user?.attributes?.name;
      })
      .catch((err) => console.log(err));
  }

  login() {
    window.location.assign(this.loginurl);
  }

  logout() {
    this.isUserLoggedIn = false;
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  constructor() {}

  ngOnDestroy() {}
}
