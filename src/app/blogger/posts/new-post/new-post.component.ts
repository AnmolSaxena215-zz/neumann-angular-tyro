import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


  blogForm: FormGroup
  title: string
  description: string
  constructor(private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.title = localStorage.getItem('blog-title') ? localStorage.getItem('blog-title') : ''
    this.description = localStorage.getItem('blog-description') ? localStorage.getItem('blog-description') : ''
    this.blogForm = this.formBuilder.group({
      title: [this.title, [Validators.required, Validators.minLength(10)]],
      description: [this.description, [Validators.required, Validators.minLength(100)]]
    })
  }

  save() {
    localStorage.setItem('blog-title', this.blogForm.get("title").value)
    localStorage.setItem('blog-description', this.blogForm.get("description").value)
    this.route.navigate(['select-topics'])
  }

  goToDashboard(){
    this.route.navigate(['/dashboard'])
  }

}
