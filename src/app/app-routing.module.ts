import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/static/account/account.component';
import { AuthenticationGuard } from './shared/common/authentication.guard';
import { DashboardComponent } from './pages/static/dashboard/dashboard.component';
import { HomeComponent } from './pages/static/home/home.component';
import { ProfileComponent } from './pages/static/profile/profile.component';
import { SupportComponent } from './pages/static/support/support.component';
import { uiroutes } from './shared/common/ui-routes';
import { AddEditInstitutionComponent } from './pages/forms/add-edit-institution/add-edit-institution.component';
import { AddEditMemberComponent } from './pages/forms/add-edit-member/add-edit-member.component';

const routes: Routes = [
  {
    path: uiroutes.DASHBOARD_ROUTE,
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: uiroutes.PROFILE_ROUTE,
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: uiroutes.ACCOUNT_ROUTE,
    component: AccountComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
  },
  {
    path: uiroutes.SUPPORT_ROUTE,
    component: SupportComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
  },
  {
    path: uiroutes.INSTITUTION_FORM_ROUTE,
    component: AddEditInstitutionComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
  },
  {
    path: uiroutes.MEMBER_FORM_ROUTE,
    component: AddEditMemberComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
