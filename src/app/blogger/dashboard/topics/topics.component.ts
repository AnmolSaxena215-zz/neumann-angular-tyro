import { Component, OnInit } from '@angular/core';
import { Topics } from './topics.model';
import {TopicService} from '../../services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  public topicToFollow=[];
  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopic()
    .subscribe(data=>
      this.topicToFollow=data);
  }

}
