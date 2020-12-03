import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogListComponent } from '../../dashboard/blog-list/blog-list.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css'],
})
export class ReadPostComponent implements OnInit {

  public blog: any
  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.postService.getPost(id)
      .subscribe(data => {
        console.log(data)
        this.blog = data
      })
  }

  liked(id, hasLiked) {
    if (hasLiked === false) {
      this.postService.likePost(id)
        .subscribe(data => {
          console.log(data)
          this.ngOnInit();
        })
    }
    else {
      this.postService.unlikePost(id)
        .subscribe(data => {
          console.log(data)
          this.ngOnInit();
        })
    }
  }

  bookmarked(id, isBookmarked) {
    if (isBookmarked === false) {
      this.postService.bookmarkPost(id)
        .subscribe(data => {
          console.log(data)
          this.ngOnInit();
        })
    }
    else{
      this.postService.unbookmarPost(id)
      .subscribe(data=>{
        console.log(data)
        this.ngOnInit();
      })
    }
  }

}
