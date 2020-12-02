import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  public topicToFollow = [];
  toggle: boolean
  buttonText: string
  opened=false
  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopic()
      .subscribe(data => {
        this.topicToFollow = data
      });
  }

  onClick(_id: any, hasFollowed: boolean) {
    console.log(hasFollowed)
    if (hasFollowed === true) {
      this.topicService.unfollowTopic(_id)
      .subscribe(data=>{
        console.log(data)
        this.ngOnInit();
      })
    }
    else {
      console.log(hasFollowed)
      this.topicService.followTopic(_id)
        .subscribe(data => {
          console.log(data)
          this.ngOnInit();
        })
    }
  }

}
