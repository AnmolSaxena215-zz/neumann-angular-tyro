import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostBarComponent } from './new-post-bar.component';

describe('NewPostBarComponent', () => {
  let component: NewPostBarComponent;
  let fixture: ComponentFixture<NewPostBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
