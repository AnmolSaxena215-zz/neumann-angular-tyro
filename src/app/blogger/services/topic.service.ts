import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface TopicFollowing {
  hasFollowed: boolean;
  topic: {
    articles: Array<String>;
    followers: Array<String>;
    topicName: string;
    __v:number;
    _id: string;
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopic(): Observable<TopicFollowing[]> {
    return this.http.get<TopicFollowing[]>('https://tyro-neumann-project.herokuapp.com/topics?count=2',
    )
  }

  getTopicSidenav(): Observable<TopicFollowing[]> {
    return this.http.get<TopicFollowing[]>('https://tyro-neumann-project.herokuapp.com/topics/',
    )
  }

  getTopicSuggestion(): Observable<TopicFollowing[]> {
    return this.http.get<TopicFollowing[]>('https://tyro-neumann-project.herokuapp.com/topics');
  }

  followTopic(id) {
    return this.http.post('https://tyro-neumann-project.herokuapp.com/topics/follow/' + id,
      { observe: 'response' })
  }

  unfollowTopic(id){
    return this.http.post('https://tyro-neumann-project.herokuapp.com/topics/unfollow/' + id,
    {observe : 'respose'})
  }


}
