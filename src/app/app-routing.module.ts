import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SupportComponent } from './pages/support/support.component';

export const DASHBOARD_ROUTE = 'dashboard';
export const PROFILE_ROUTE = 'profile';
export const ACCOUNT_ROUTE = 'account';
export const SUPPORT_ROUTE = 'support';

const routes: Routes = [
  {
    path: DASHBOARD_ROUTE,
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: PROFILE_ROUTE,
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: ACCOUNT_ROUTE,
    component: AccountComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
  },
  {
    path: SUPPORT_ROUTE,
    component: SupportComponent,
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
