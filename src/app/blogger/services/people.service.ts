import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from 'url';

interface PeopleFollowing {
  hasFollowed: boolean;
  user: {
    articlesCreated: Array<String>;
    bookmarks: Array<any>;
    email: string;
    followers: Array<any>;
    name: string;
    password: string;
    profilePictureUrl: string;
    topicsFollowed: Array<String>;
    _id: string;
    _v: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<PeopleFollowing[]> {
    return this.http.get<PeopleFollowing[]>('https://tyro-neumann-project.herokuapp.com/people/unfollowed-users?count=3',
    )
  }

  getPeopleSidenav(): Observable<PeopleFollowing[]> {
    return this.http.get<PeopleFollowing[]>('https://tyro-neumann-project.herokuapp.com/people/all-users/',
    )
  }

  followPeople(id) {
    return this.http.post<PeopleFollowing>('https://tyro-neumann-project.herokuapp.com/people/follow/' + id,
      { observe: 'response' })
  }

  unfollowPeople(id) {
    return this.http.post<PeopleFollowing>('https://tyro-neumann-project.herokuapp.com/people/unfollow/' + id,
    {observe : 'response'})
  }
}
