import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : string = null;
  constructor(private authService : AuthService, private router : Router) { }

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
      console.log("logged in");
      console.log(resData);
      this.router.navigate(['/core']);
    },
    errorMessage => {
      console.log("There is an error");
      console.log(errorMessage);
      this.error = errorMessage;
    });
    form.reset();
  }
}
