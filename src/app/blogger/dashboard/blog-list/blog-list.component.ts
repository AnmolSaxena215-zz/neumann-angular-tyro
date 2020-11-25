import { Component, OnInit } from '@angular/core';
import { BlogListService } from './blog-list.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogList = [];

  constructor(private blogService: BlogListService) { }

  ngOnInit(): void {
    this.blogService.getBlogs()
      .subscribe(data => {
        this.blogList = data
      }
      )
  }

}