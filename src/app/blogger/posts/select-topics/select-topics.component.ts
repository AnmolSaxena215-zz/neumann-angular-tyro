import { OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';
import {TopicService} from '../../services/topic.service';

@Component({
  selector: 'app-select-topics',
  templateUrl: './select-topics.component.html',
  styleUrls: ['./select-topics.component.css'],
  
})
export class SelectTopicsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  topicCtrl = new FormControl();
  filteredtopics: Observable<string[]>;
  topics: string[] = ['Science'];
  alltopics=[] ;

  @ViewChild('topicInput') topicInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  isEnabled: boolean;

  constructor(private router:Router, private topicService:TopicService) {
    this.filteredtopics = this.topicCtrl.valueChanges.pipe(
        startWith(null),
        map((topic: string | null) => topic ? this._filter(topic) : this.alltopics.slice()));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getTopics(){
    this.topicService.getTopicSuggestion()
    .subscribe(data=>{
      console.log(data)
      data.forEach(each=>
        {
          this.alltopics.push(each.topicName)
          console.log(each.topicName)
        })});
      }

  goToNewPost(){
    this.router.navigate(['/read-post']);
  }
  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      // Add our topic
      if (((value || '').trim() && this.topics.length < 5)&&(this.alltopics.includes(input.value))) {
        this.topics.push(value.trim());
      }
      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.topicCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.topics.indexOf(fruit);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.topics.length < 5) {
      if ((!this.topics.includes(event.option.viewValue))) {
        this.topics.push(event.option.viewValue);
      }
      this.topicInput.nativeElement.value = '';
      this.topicCtrl.setValue(null);
    } 
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alltopics.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}


 
