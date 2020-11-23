import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ArticleResponse {
    numberOfClicks: number,
    topics: Array<String>,
    id: string,
    numberOfLikes: number,
    title: string,
    content: string,
    createdBy: string,
    createdAt: string,
    __v: number
  
  }
@Injectable({
    providedIn: 'root'
  })

export class BlogListService{

    constructor(private http : HttpClient){}

    getBlogs() : Observable<ArticleResponse[]> {
        return this.http.get<ArticleResponse[]>('https://tyro-neumann-project.herokuapp.com/article/feed',
        )
      }
}