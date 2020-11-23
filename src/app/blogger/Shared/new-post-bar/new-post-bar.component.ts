import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post-bar',
  templateUrl: './new-post-bar.component.html',
  styleUrls: ['./new-post-bar.component.css']
})
export class NewPostBarComponent implements OnInit {

  count: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
  goToTopic(){
    
      this.router.navigate(['/select-topics']);
  }

}
