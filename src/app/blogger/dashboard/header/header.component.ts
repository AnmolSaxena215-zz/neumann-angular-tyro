import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notifcations : any
  constructor(
    private notService : NotificationsService,
    private router:Router) { }

  ngOnInit(): void {
  }
  goToNewPost(){
    this.router.navigate(['/new-post']);
  }
  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  goToBookmarks(){
    this.router.navigate(['/bookmarks'])
  }

  displayNotifications(){
    this.notService.getNotifications()
    .subscribe(data =>{
      console.log(data)
      this.notifcations=data
    })
  }

}
