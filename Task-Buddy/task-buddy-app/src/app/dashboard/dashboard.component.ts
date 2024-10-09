import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter/counter.component';
import { Task } from '../model/task';
import { provideNativeDateAdapter } from '@angular/material/core';
import { LocalStorageService } from '../local-storage.service';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  text: string;
  template: string;
  image?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    MatCalendar,
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
    FormsModule,
    MatIconModule,
  ],
})
export class DashboardComponent {
  tiles: Tile[] = [
    {
      text: 'One',
      cols: 4,
      rows: 1,
      color: '#D0E6D8',
      template: 'templateOne',
    },

    {
      text: 'Two',
      cols: 4,
      rows: 4,
      color: '#D0E6D8',
      template: 'templateTwo',
    },
    {
      text: 'Three',
      cols: 3,
      rows: 6,
      color: '#F4B6C2',
      template: 'templateThree',
    },
    {
      text: 'Four',
      cols: 1,
      rows: 6,
      color: '#A4D8E1',
      template: 'templateFour',
    },
    {
      text: 'Five',
      cols: 4,
      rows: 1,
      color: '#A7E6E1',
      template: 'templateFive',
    },
  ];

  currentSlide = 0;
  intervalId: any;
  Tasks: Task[] = [];
  newTaskTitle: string = '';
  newTaskDate: Date | null = null;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    const savedTasks = this.localStorageService.getItem('tasks');
    this.Tasks = savedTasks ? savedTasks : [];
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.wallpapers.length;
    }, 5000);
  }

  wallpapers = [
    {
      image: '../assets/wallpaper1.jpg',
      quote:
        'The only limit to our realization of tomorrow is our doubts of today.',
    },
    {
      image: '../assets/wallpaper2.jpg',
      quote: 'Do something today that your future self will thank you for.',
    },
    {
      image: '../assets/wallpaper3.jpg',
      quote: "Believe you can and you're halfway there.",
    },
    {
      image: '../assets/wallpaper4.webp',
      quote:
        'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    },
  ];

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
    this.Tasks[index].isEditing = true;
  }

  saveTask(index: number) {
    this.Tasks[index].isEditing = false;
    this.localStorageService.setItem('tasks', this.Tasks);
  }

  cancelEdit(index: number) {
    this.Tasks[index].isEditing = false;
  }

  deleteTask(index: number) {
    this.Tasks.splice(index, 1);
    this.localStorageService.setItem('tasks', this.Tasks);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
