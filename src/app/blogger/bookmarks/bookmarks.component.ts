import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks = [];
  constructor(
    private bookmarkService :  BookmarksService
  ) { }

  ngOnInit(): void {
    this.bookmarkService.getBookmarks().
    subscribe(data=>{
      console.log(data)
    })
    
  }

}
