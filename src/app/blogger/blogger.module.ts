import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogListComponent } from './dashboard/blog-list/blog-list.component';
import { HeaderComponent } from './dashboard/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BlogListComponent,
    HeaderComponent
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
