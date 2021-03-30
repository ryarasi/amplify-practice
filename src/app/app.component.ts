import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amplify-angular-auth';
  isUserLoggedIn: boolean = false;
  userName: string = '';

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        this.isUserLoggedIn = true;
        this.userName = user?.attributes?.name;
        console.log('Name of the user ', this.userName);
      })
      .catch((err) => console.log(err));
  }

  constructor() {}

  ngOnDestroy() {}
}
