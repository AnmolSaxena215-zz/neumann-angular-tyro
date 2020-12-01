import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-bar',
  templateUrl: './post-bar.component.html',
  styleUrls: ['./post-bar.component.css']
})
export class PostBarComponent implements OnInit {

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    this.route.navigate(['/dashboard'])
  }

  goToNewpost(){
    this.route.navigate(['/new-post'])
  }

}
