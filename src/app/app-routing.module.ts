import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './blogger/dashboard/dashboard.component';
import { NewPostComponent } from './blogger/posts/new-post/new-post.component';
import { SelectTopicsComponent } from './blogger/posts/select-topics/select-topics.component';

const routes: Routes = [
  {path : 'dash', component : DashboardComponent, canActivate : [AuthGuard]},
  {path : 'dashboard', component : DashboardComponent, canActivate : [AuthGuard]},
  {path : '', component : AuthComponent},
  { path : 'auth', component: AuthComponent,
  children: [
    { path : 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
  ]
},
{path : 'new-post', component : NewPostComponent},
{path : 'select-topics', component: SelectTopicsComponent},

{path : '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
