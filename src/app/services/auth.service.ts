import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  id: string,
  name: string,
  email: string,
  token: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userSignup(name: string, email: string, password: string) {
    return this.http.post<AuthResponseData>('https://tyro-neumann-project.herokuapp.com/user/signup',
      {
        name: name,
        email: email,
        password: password,
      },
      { observe: 'response' }
    ).pipe(tap(resData =>{
      console.log(resData);
      localStorage.setItem('token',resData.headers.get("Authorization"));
    }), 
      
      catchError(errorResponse => {
      return throwError(this.handleError(errorResponse.error["error"]));
    }
    ));
  }

  userLogin(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://tyro-neumann-project.herokuapp.com/user/login',
      {
        email: email,
        password: password
      },
      { observe: 'response' }
    ).pipe(tap(resData =>{
      console.log(resData);
      localStorage.setItem('token',resData.headers.get("Authorization"));
    }), 
    catchError(errorResponse => {
      if(typeof(errorResponse)==='undefined'){
        console.log("This is undefined")
      }
      console.log(errorResponse);
      return throwError(this.handleError(errorResponse.error["error"]));
    }
    ));
  }

  isLoggedIn(){
    return !! localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  private handleError(error: string) {
    var message: string = null;
    console.log(error);
    switch (error) {

      case "User not found":
        message = "User does not exist! Please signup before logging in!";
        break;

      case "Incorrect password ":
        console.log("Inside switch");
        message = "Invalid password!";
        break;

      case "email already exists":
        message="The email entered already exists!";
        break;

        default:
          message = "Sorry! Unable to connect to server";

    }

    return message;
  }
}
