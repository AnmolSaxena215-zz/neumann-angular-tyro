import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
export class BookmarksService {

  constructor(
    private http: HttpClient
  ) { }

  getBookmarks() : Observable<PostResponse[]>{
    return this.http.get<PostResponse[]>('https://tyro-neumann-project.herokuapp.com/article/view-bookmarks')
  }

  bookmarkPost(id){
    return this.http.post('https://tyro-neumann-project.herokuapp.com/article/bookmark/' + id,
    {observe : 'response'}
    )
  }

  unbookmarPost(id){
    return this.http.post('https://tyro-neumann-project.herokuapp.com/article/unbookmark/' + id,
    {observe : 'response'})
  }
}
