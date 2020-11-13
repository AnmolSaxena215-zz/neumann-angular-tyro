import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {path : '', component : AppComponent},
  { path : 'auth', component: AuthComponent,
  children: [
    { path : 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
  ]
},
{ path : 'core' , component :CoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
