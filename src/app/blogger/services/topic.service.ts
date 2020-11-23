import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


interface TopicFollowing{
  articles:Array<String>;
  followers:Array<String>;
  _id:string;
  topicName:string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopic() : Observable<TopicFollowing[]> {
    return this.http.get<TopicFollowing[]>('https://tyro-neumann-project.herokuapp.com/topics/',
    )
  }

  getTopicSuggestion() : Observable<TopicFollowing[]>{
    return this.http.get<TopicFollowing[]>('https://tyro-neumann-project.herokuapp.com/topics/suggestions?term=ar');
  }
}
