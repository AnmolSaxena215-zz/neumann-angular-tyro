import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TrendingService } from 'src/app/blogger/services/trending.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : string = null;
  constructor(
    private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.authService.userLogin(email, password)
    .subscribe(resData => {
      console.log(resData.headers.get("Authorization"));
      localStorage.setItem('token',resData.headers.get("Authorization"));
      console.log("logged in");
      this.router.navigate(['/dash']);
    },
    errorMessage => {
      console.log("There is an error");
      console.log(errorMessage);
      this.error = errorMessage;
    });
    form.reset();
  }
}
