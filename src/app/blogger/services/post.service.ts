import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PostResponse {
    article: {
      numberOfClicks: number,
      topics: Array<any>,
      likedBy: Array<any>,
      bookmarkedBy: Array<any>,
      _id: string,
      numberOfLikes: number,
      title: string,
      content: string,
      createdBy: {
        _id: string,
        name: string,
        profilePictureUrl: string
      },
      createdAt: number,
      __v: number
    },
    hasLiked: boolean,
    isBookmarked: boolean
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPost(id) {
    return this.http.get<PostResponse>('https://tyro-neumann-project.herokuapp.com/article/read/' + id)
  }

  likePost(id) {
    return this.http.post('https://tyro-neumann-project.herokuapp.com/article/like/' + id,
    {observe : 'response'}
    )
  }

  unlikePost(id){
    return this.http.post('https://tyro-neumann-project.herokuapp.com/article/unlike/' + id,
    {observe : 'response'}
    )
  }

  publishPost(title : string, content : string, topics : Array<string>){
    console.log("Inside publish service" + title + content + topics)
    return this.http.post('https://tyro-neumann-project.herokuapp.com/article/publish',
    {
      title : title, 
      content : content, 
      topics : topics
    },
    {observe : 'response'})
  }
  
}