import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ArticleResponse {
  article: {
    bookmarkedBy : Array<String>;
    content: string,
    createdAt: number,
    createdBy: string,
    likedBy : Array<String>,
    numberOfClicks: number,
    title: string,
    topics : {
      topicName : string,
      _id : string
    },
    _id : string
  }
}
@Injectable({
  providedIn: 'root'
})

export class BlogListService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<ArticleResponse[]> {
    return this.http.get<ArticleResponse[]>('https://tyro-neumann-project.herokuapp.com/article/feed',
    )
  }
}