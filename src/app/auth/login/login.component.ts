import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : string = null;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email,password)
    this.authService.userLogin(email, password)
    .subscribe(resData => {
      console.log(resData);
    },
    errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
    });
    form.reset();
  }
}
