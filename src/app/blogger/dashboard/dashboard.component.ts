import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public topicToFollow = [];
  public peopleToFollow = [];
  toggle: boolean
  buttonText: string
  opened1=false
  opened2=false
  constructor(
    private topicService: TopicService,
    private peopleService : PeopleService
    ) { }

  ngOnInit(): void {
    this.topicService.getTopicSidenav()
      .subscribe(data => {
        this.topicToFollow = data
      });
    this.peopleService.getPeopleSidenav()
    .subscribe(data =>{
      this.peopleToFollow=data
    });
  }

  onClickTopics(_id: any, hasFollowed: boolean) {
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

  onClickPeople(_id: any, hasFollowed : boolean){
    if (hasFollowed === true) {
      this.peopleService.unfollowPeople(_id)
      .subscribe(data=>{
        console.log(data)
        this.ngOnInit();
      })
    }
    else {
      console.log(hasFollowed)
      this.peopleService.followPeople(_id)
        .subscribe(data => {
          console.log(data)
          this.ngOnInit();
        })
    }
  }

}
