import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(
    private http : HttpClient
  ) { }

  getBookmarks(){
    return this.http.get('https://tyro-neumann-project.herokuapp.com/article/view-bookmarks')
  }
}
