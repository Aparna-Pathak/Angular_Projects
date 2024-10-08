import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSchedulerComponent } from './task-scheduler.component';

describe('TaskSchedulerComponent', () => {
  let component: TaskSchedulerComponent;
  let fixture: ComponentFixture<TaskSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSchedulerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
