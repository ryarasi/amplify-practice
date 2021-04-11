import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { AuthenticationGuard } from './shared/common/authentication.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SupportComponent } from './pages/support/support.component';
import { uiroutes } from './shared/common/ui-routes';
import { AddInstitutionComponent } from './pages/entities/add-institution/add-institution.component';

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
    path: uiroutes.ADD_INSTITUTION_ROUTE,
    component: AddInstitutionComponent,
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
