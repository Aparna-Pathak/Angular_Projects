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

  ngOnInit(): void {
    let savedTasks = localStorage.getItem('tasks');
    this.Tasks = savedTasks ? JSON.parse(savedTasks) : [];
  }

  addTask() {
    if (this.newTaskTitle.trim().length && this.newTaskDate) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        date: this.newTaskDate,
      };

      // Add the new task to the tasks array
      this.Tasks.push(newTask);

      // Reset the input fields
      this.newTaskTitle = '';
      this.newTaskDate = null; // Clear the datepicker

      // Store the updated tasks in local storage
      localStorage.setItem('tasks', JSON.stringify(this.Tasks));
    }
  }

  editTask(index: number) {
    this.Tasks[index].isEditing = true; // Set editing state to true
  }

  saveTask(index: number) {
    this.Tasks[index].isEditing = false; // Save the task and exit editing mode
    // Any additional save logic can be added here
  }

  cancelEdit(index: number) {
    this.Tasks[index].isEditing = false; // Exit editing mode without saving
    // Optionally, you can revert changes if necessary
  }

  deleteTask(index: number) {
    this.Tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }
}
