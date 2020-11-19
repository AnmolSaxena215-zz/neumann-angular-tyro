import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogListComponent } from './dashboard/blog-list/blog-list.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { TrendingComponent } from './dashboard/trending/trending.component';
import { PeopleComponent } from './dashboard/people/people.component';
import { TopicsComponent } from './dashboard/topics/topics.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BlogListComponent,
    HeaderComponent,
    TrendingComponent,
    PeopleComponent,
    TopicsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [
    DashboardComponent,
    BlogListComponent,
    HeaderComponent
  ]
})
export class BloggerModule { }
