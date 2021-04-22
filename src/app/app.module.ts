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
import { AuthState } from './shared/state/auth/auth.state';
import { NotificationState } from './shared/state/notifications/notification.state';
import { LoadingState } from './shared/state/loading/loading.state';
import { AdminDashboardComponent } from './pages/static/dashboard/tabs/admin-dashboard/admin-dashboard.component';
import { AnnouncementDashboardComponent } from './pages/static/dashboard/tabs/announcement-dashboard/announcement-dashboard.component';
import { AssignmentDashboardComponent } from './pages/static/dashboard/tabs/assignment-dashboard/assignment-dashboard.component';
import { GroupDashboardComponent } from './pages/static/dashboard/tabs/group-dashboard/group-dashboard.component';
import { CourseDashboardComponent } from './pages/static/dashboard/tabs/course-dashboard/course-dashboard.component';
import { ReportDashboardComponent } from './pages/static/dashboard/tabs/report-dashboard/report-dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddEditInstitutionComponent } from './pages/forms/add-edit-institution/add-edit-institution.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstitutionProfileRendererComponent } from './shared/cell-renderers/institution-profile/institution-profile-renderer.component';
import {
  InstitutionDeleteConfirmationDialog,
  InstitutionProfileComponent,
} from './pages/modals/institution-profile/institution-profile.component';
import { InstitutionState } from './shared/state/institutions/institution.state';
import { InstitutionsTableComponent } from './pages/tables/institutions-table/institutions-table.component';
import { MembersTableComponent } from './pages/tables/members-table/members-table.component';
import { MemberState } from './shared/state/members/member.state';
import { MemberProfileRendererComponent } from './shared/cell-renderers/member-profile/member-profile-renderer.component';
import { MemberProfileComponent } from './pages/modals/member-profile/member-profile.component';
import { AddEditMemberComponent } from './pages/forms/add-edit-member/add-edit-member.component';
import { GroupState } from './shared/state/groups/group.state';
import { AddEditGroupComponent } from './pages/forms/add-edit-group/add-edit-group.component';
import { MasterGridComponent } from './shared/abstract/master-grid/components/master-grid/master-grid.component';
import { InstitutionAdminsTableComponent } from './pages/tables/institution-admins-table/institution-admins-table.component';
import { ClassAdminsTableComponent } from './pages/tables/class-admin-table/class-admins-table.component';
import { LearnersTableComponent } from './pages/tables/learners-table/learners-table.component';

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
    AddEditInstitutionComponent,
    InstitutionProfileRendererComponent,
    InstitutionProfileComponent,
    MasterGridComponent,
    InstitutionsTableComponent,
    MembersTableComponent,
    InstitutionAdminsTableComponent,
    ClassAdminsTableComponent,
    LearnersTableComponent,
    MemberProfileRendererComponent,
    MemberProfileComponent,
    AddEditMemberComponent,
    AddEditGroupComponent,
    InstitutionDeleteConfirmationDialog,
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
      NgxsModule.forRoot(
        [
          AuthState,
          NotificationState,
          LoadingState,
          InstitutionState,
          MemberState,
          GroupState,
        ],
        {
          developmentMode: !environment.production,
        }
      ),
      NgxsReduxDevtoolsPluginModule.forRoot(),
    ],
  ],
  providers: [AuthenticationGuard, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
