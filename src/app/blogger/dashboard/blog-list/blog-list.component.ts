import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { BlogListService } from './blog-list.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogList = [];
  public blog;

  constructor(
    private blogService: BlogListService,
    private route : Router,
    ) { }

  ngOnInit(): void {
    this.blogService.getBlogs()
      .subscribe(data => {
        this.blogList = data
      }
      )
  }

  goTo(id){
   this.route.navigate(['read-post/'+id])
  }

  getData(){
    return this.blog;
  }

}