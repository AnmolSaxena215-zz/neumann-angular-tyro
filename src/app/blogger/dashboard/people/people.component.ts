import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public peopleToFollow = [];


  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {

    this.peopleService.getPeople()
      .subscribe(data => {
        this.peopleToFollow = data
      }
      );
  }

}
