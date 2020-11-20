import { Component, OnInit } from '@angular/core';
import { Blog } from './blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogList : Blog[] = [
    new Blog('Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date()),
    new Blog('Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date() ),
    new Blog('Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date() ),
    new Blog('Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date()),
    new Blog('Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date()),
    new Blog('Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date()),
    new Blog('Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date()),
    new Blog('Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date())
  ];

  constructor() { }

  ngOnInit(): void {
    var d = new Date();
    console.log(d.getDate(), d.getMonth(), d.getFullYear());
  }

}