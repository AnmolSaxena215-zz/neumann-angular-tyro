import { Component, OnInit } from '@angular/core';
import { Topics } from './topics.model';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topicList : Topics[] =[
    new Topics(1,'Science'),
    new Topics(2,'Technology')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
