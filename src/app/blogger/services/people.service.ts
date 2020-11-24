import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface PeopleFollowing{
  followers: Array<String>;
  topicsFollowed: Array<String>;
  articlesCreated: Array<String>;
  _id:string;
  name:string;
  email:string;
  password:string;
  _v:number;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}

  getPeople() : Observable<PeopleFollowing[]> {
    return this.http.get<PeopleFollowing[]>('https://tyro-neumann-project.herokuapp.com/people?count=3',
    )
  }
}
