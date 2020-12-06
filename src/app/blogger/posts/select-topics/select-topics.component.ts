import { OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TopicService } from '../../services/topic.service';
import { PostService } from '../../services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-topics',
  templateUrl: './select-topics.component.html',
  styleUrls: ['./select-topics.component.css'],

})
export class SelectTopicsComponent implements OnInit {

  allTopicsReceived: any
  chosenTopicIds: Array<string> = []
  blogTitle: string
  blogDesc: string
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  topicCtrl = new FormControl();
  filteredtopics: Observable<string[]>;
  topics: string[] = [];
  alltopics = [];

  @ViewChild('topicInput') topicInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  isEnabled: boolean;

  constructor(
    private route: Router,
    private topicService: TopicService,
    private postService: PostService,
    private toastr: ToastrService
  ) {
    this.filteredtopics = this.topicCtrl.valueChanges.pipe(
      startWith(null),
      map((topic: string | null) => topic ? this._filter(topic) : this.alltopics.slice()));
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.blogTitle = localStorage.getItem('blog-title')
    this.blogDesc = localStorage.getItem('blog-description')
    console.log(this.blogTitle + this.blogDesc)
    this.topicService.getTopicSuggestion()
      .subscribe(data => {
        console.log(data)
        this.allTopicsReceived = data
        data.forEach(each => {
          this.alltopics.push(each.topic.topicName)
          console.log(each.topic.topicName)
        })
        console.log(this.allTopicsReceived)
      });
  }

  // getTopics() {
  //   this.topicService.getTopicSuggestion()
  //     .subscribe(data => {
  //       console.log(data)
  //       data.forEach(each => {
  //         this.alltopics.push(each.topic.topicName)
  //         console.log(each.topic.topicName)
  //       })
  //     });
  // }

  publishPost() {
    this.getTopicId(this.topics)
    console.log("afterPublis" + this.blogTitle + this.blogDesc)
    console.log(this.chosenTopicIds)
    this.postService.publishPost(this.blogTitle, this.blogDesc, this.chosenTopicIds)
      .subscribe(data => {
        console.log(data)
        if (data.status === 201) {
          this.toastr.success('Publish successful', '', {
            positionClass: 'toast-top-center'
          })
          localStorage.removeItem('blog-title')
          localStorage.removeItem('blog-description')
          setTimeout(() => {
            this.route.navigate(['/dashboard']);
          }, 2000);
        }
        else if (data.status === 204) {
          this.toastr.error('Atleast one topic needed', '', {
            positionClass: 'toast-top-center'
          })
        }
        else{
          this.toastr.error('Missing title and content', '', {
            positionClass: 'toast-top-center'
          })
        }
      }
      )
  }

  goToNewPost() {
    this.route.navigate(['/new-post'])
  }
  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      // Add our topic
      if (((value || '').trim() && this.topics.length < 5) && (this.alltopics.includes(input.value))) {
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

  getTopicId(selectedTopics: string[]) {
    selectedTopics.forEach(element => {
      var index = this.allTopicsReceived.findIndex(x => x.topic.topicName === element);
      console.log("Inside getTopicID" + this.allTopicsReceived[index])
      console.log(index)
      this.chosenTopicIds.push(this.allTopicsReceived[index].topic._id);
    });
  }
}



