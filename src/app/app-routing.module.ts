import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
  },
  {
    path: 'support',
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
