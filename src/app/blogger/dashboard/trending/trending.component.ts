import { Component, OnInit } from '@angular/core';
import { Trending } from './trending.model';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendingList : Trending[] = [
    new Trending('01','Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date()),
    new Trending('02','Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date() ),
    new Trending('03','Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date() ),
    new Trending('04','Anuhitha', 'Fundamentals of Angular', 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', '../../../assets/images/Profile-ICon.png',new Date() )
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
