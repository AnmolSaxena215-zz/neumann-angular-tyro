import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './blogger/dashboard/dashboard.component';
import { NewPostComponent } from './blogger/posts/new-post/new-post.component';
import { ReadPostComponent } from './blogger/posts/read-post/read-post.component';
import { SelectTopicsComponent } from './blogger/posts/select-topics/select-topics.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'new-post', component: NewPostComponent, canActivate: [AuthGuard] },
  { path: 'select-topics', component: SelectTopicsComponent, canActivate: [AuthGuard] },
  { path: 'read-post/:id', component: ReadPostComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
