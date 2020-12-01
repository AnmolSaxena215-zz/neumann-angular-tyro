import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  error : string = null;
  constructor(
    private authService : AuthService,
    private route : Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    if(!form.valid){
      return;
    }
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;

    this.authService.userSignup(name, email, password).
    subscribe(resData => {
      console.log(resData);
      this.route.navigate(['/dashboard'])
    },
    errorMessage => {
      console.log("There is an error");
      console.log(errorMessage);
      this.error = errorMessage;
    });
    form.reset();
  }

}
