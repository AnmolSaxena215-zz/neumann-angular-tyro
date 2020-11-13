import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';

interface AuthResponseData{
  id : string,
  name : string,
  email : string,
  token : string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userSignup(name : string,email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://tyro-neumann-project.herokuapp.com/user/signup',
      {
        name : name,
        email: email,
        password: password,
      }
    ).pipe(catchError(errorRes => {
      let errorMessage = "An unknown error occured";
      if(errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL-EXISTS':
          errorMessage = "This email already exists";
      }
      return throwError(errorMessage);
    }));
  }

  userLogin(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://tyro-neumann-project.herokuapp.com/user/login', 
    {
      email: email,
      password: password
    });
  }
}
