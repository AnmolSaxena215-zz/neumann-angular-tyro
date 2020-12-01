import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogListComponent } from '../../dashboard/blog-list/blog-list.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css'],
  providers : [BlogListComponent]
})
export class ReadPostComponent implements OnInit {

  public blog : any
  constructor(
    private activeRoute : ActivatedRoute,
    private postService : PostService,
    private blogDetails : BlogListComponent
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.postService.getPost(id)
    .subscribe(data =>{
      this.blog = data
    })
  }

}
