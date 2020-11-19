import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './blogger/dashboard/dashboard.component';

const routes: Routes = [
  {path : 'dash', component : DashboardComponent},
  {path : '', component : AuthComponent},
  { path : 'auth', component: AuthComponent,
  children: [
    { path : 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
