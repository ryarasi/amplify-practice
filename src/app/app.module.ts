import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Styling } from './styling.imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/static/dashboard/dashboard.component';
import { HomeComponent } from './pages/static/home/home.component';
import { ProfileComponent } from './pages/static/profile/profile.component';
import { AccountComponent } from './pages/static/account/account.component';
import { SupportComponent } from './pages/static/support/support.component';
import { AuthenticationGuard } from './shared/common/authentication.guard';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';
import { AuthState } from './shared/ngxs/auth/auth.state';
import { NotificationState } from './shared/ngxs/notifications/notification.state';
import { LoadingState } from './shared/ngxs/loading/loading.state';
import { AdminDashboardComponent } from './pages/static/dashboard/tabs/admin-dashboard/admin-dashboard.component';
import { AnnouncementDashboardComponent } from './pages/static/dashboard/tabs/announcement-dashboard/announcement-dashboard.component';
import { AssignmentDashboardComponent } from './pages/static/dashboard/tabs/assignment-dashboard/assignment-dashboard.component';
import { GroupDashboardComponent } from './pages/static/dashboard/tabs/group-dashboard/group-dashboard.component';
import { CourseDashboardComponent } from './pages/static/dashboard/tabs/course-dashboard/course-dashboard.component';
import { ReportDashboardComponent } from './pages/static/dashboard/tabs/report-dashboard/report-dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddInstitutionComponent } from './pages/forms/add-institution/add-institution.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstitutionProfileRendererComponent } from './shared/cell-renderers/institution-profile/institution-profile-renderer.component';
import { InstitutionProfileComponent } from './pages/modals/institution-profile/institution-profile.component';

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
    AddInstitutionComponent,
    InstitutionProfileRendererComponent,
    InstitutionProfileComponent,
  ],
  entryComponents: [InstitutionProfileComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
  providers: [AuthenticationGuard, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
