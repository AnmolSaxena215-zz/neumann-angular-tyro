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
  
}