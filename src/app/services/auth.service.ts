import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
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
    ).pipe(catchError(errorResponse => {
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
    ).pipe(catchError(errorResponse => {
      return throwError(this.handleError(errorResponse.error["error"]));
    }
    ));
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
    }

    return message;
  }
}
