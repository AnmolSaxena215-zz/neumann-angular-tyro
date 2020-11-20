import { Component, OnInit } from '@angular/core';
import { People } from './people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleToFollow :  People[] = [
    new People('Anuhitha', '../../../../assets/images/Profile-ICon.png'),
    new People('Anuhitha', '../../../../assets/images/Profile-ICon.png'),
    new People('Anuhitha', '../../../../assets/images/Profile-ICon.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
