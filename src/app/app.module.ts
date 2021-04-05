import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Styling } from './styling.imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';
import { SupportComponent } from './pages/support/support.component';
import { AuthenticationGuard } from './shared/common/authentication.guard';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';
import { AuthState } from './shared/ngxs/auth/auth.state';
import { NotificationState } from './shared/ngxs/notifications/notification.state';
import { LoadingState } from './shared/ngxs/loading/loading.state';
import { AdminDashboardComponent } from './pages/dashboard/tabs/admin-dashboard/admin-dashboard.component';
import { AnnouncementDashboardComponent } from './pages/dashboard/tabs/announcement-dashboard/announcement-dashboard.component';
import { AssignmentDashboardComponent } from './pages/dashboard/tabs/assignment-dashboard/assignment-dashboard.component';
import { GroupDashboardComponent } from './pages/dashboard/tabs/group-dashboard/group-dashboard.component';
import { CourseDashboardComponent } from './pages/dashboard/tabs/course-dashboard/course-dashboard.component';
import { ReportDashboardComponent } from './pages/dashboard/tabs/report-dashboard/report-dashboard.component';
import { AgGridModule } from 'ag-grid-angular';

Amplify.configure(awsconfig);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    AccountComponent,
    SupportComponent,
    AdminDashboardComponent,
    AnnouncementDashboardComponent,
    AssignmentDashboardComponent,
    GroupDashboardComponent,
    CourseDashboardComponent,
    ReportDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    Styling,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    [
      NgxsModule.forRoot([AuthState, NotificationState, LoadingState], {
        developmentMode: !environment.production,
      }),
      NgxsReduxDevtoolsPluginModule.forRoot(),
    ],
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
