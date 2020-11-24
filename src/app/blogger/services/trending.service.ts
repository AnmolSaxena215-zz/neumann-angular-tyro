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
    createdAt: number,
    __v: number
  
  }
@Injectable({
    providedIn: 'root'
  })

export class TrendingService{

    constructor(private http : HttpClient){}

    getTrending() : Observable<ArticleResponse[]> {
        return this.http.get<ArticleResponse[]>('https://tyro-neumann-project.herokuapp.com/article/trending',
        )
      }
}