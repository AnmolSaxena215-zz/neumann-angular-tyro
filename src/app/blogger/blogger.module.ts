import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogListComponent } from './dashboard/blog-list/blog-list.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { TrendingComponent } from './dashboard/trending/trending.component';
import { PeopleComponent } from './dashboard/people/people.component';
import { TopicsComponent } from './dashboard/topics/topics.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import {NewPostBarComponent} from './Shared/new-post-bar/new-post-bar.component';
import { RelativeTimePipe } from './dashboard/pipes/relative-time.pipe';
import { SelectTopicsComponent } from './posts/select-topics/select-topics.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BlogListComponent,
    HeaderComponent,
    TrendingComponent,
    PeopleComponent,
    TopicsComponent,
    NewPostComponent,
    NewPostBarComponent,
    RelativeTimePipe,
    SelectTopicsComponent,
    NewPostBarComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [
    DashboardComponent,
    BlogListComponent,
    HeaderComponent
  ]
})
export class BloggerModule { }
