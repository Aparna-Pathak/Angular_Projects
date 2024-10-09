import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-scheduler.component.html',
  styleUrls: ['./task-scheduler.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
})
export class TaskSchedulerComponent implements OnInit {
  Tasks: Task[] = [];
  newTaskTitle: string = '';
  newTaskDate: Date | null = null; // Initialize as null for the datepicker

  constructor(private localStorageService: LocalStorageService) {} // Inject the LocalStorageService

  ngOnInit(): void {
    const savedTasks = this.localStorageService.getItem('tasks');
    this.Tasks = savedTasks ? savedTasks : [];
  }

  addTask() {
    if (this.newTaskTitle.trim().length && this.newTaskDate) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        date: this.newTaskDate,
      };

      this.Tasks.push(newTask);
      this.newTaskTitle = '';
      this.newTaskDate = null;
      this.localStorageService.setItem('tasks', this.Tasks);
    }
  }

  editTask(index: number) {
    this.Tasks[index].isEditing = true; // Set editing state to true
  }

  saveTask(index: number) {
    this.Tasks[index].isEditing = false; // Save the task and exit editing mode
    // Store updated tasks in local storage
    this.localStorageService.setItem('tasks', this.Tasks);
  }

  cancelEdit(index: number) {
    this.Tasks[index].isEditing = false; // Exit editing mode without saving
    // Optionally, you can revert changes if necessary
  }

  deleteTask(index: number) {
    this.Tasks.splice(index, 1);
    this.localStorageService.setItem('tasks', this.Tasks); // Update local storage after deletion
  }
}
