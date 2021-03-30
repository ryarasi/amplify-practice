import { Component, Input, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() isUserLoggedIn: Boolean;
  cognitoClientId = environment.cognitoClientId;
  cognitoCallbackURL = environment.cognitoCallbackURL;
  cognitoDomainName = environment.cognitoDomainName;
  loginurl = `https://${this.cognitoDomainName}/login?response_type=code&client_id=${this.cognitoClientId}&redirect_uri=${this.cognitoCallbackURL}`;

  constructor() {}

  ngOnInit(): void {}

  login() {
    window.location.assign(this.loginurl);
  }

  logout() {
    this.isUserLoggedIn = false;
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
