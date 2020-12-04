import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogListComponent } from './dashboard/blog-list/blog-list.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { TrendingComponent } from './dashboard/trending/trending.component';
import { PeopleComponent } from './dashboard/people/people.component';
import { TopicsComponent } from './dashboard/topics/topics.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { NewPostBarComponent } from './Shared/new-post-bar/new-post-bar.component';
import { SelectTopicsComponent } from './posts/select-topics/select-topics.component';
import { ReadPostComponent } from './posts/read-post/read-post.component';
import { PostBarComponent } from './Shared/post-bar/post-bar.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

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
    ReadPostComponent,
    PostBarComponent,
    BookmarksComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent,
    BlogListComponent,
    HeaderComponent
  ]
})
export class BloggerModule { }
