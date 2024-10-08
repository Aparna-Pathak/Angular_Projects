import { Component, OnInit } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    CounterOutputComponent,
    CounterButtonsComponent,
    MatSlideToggleModule,
  ],
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  checked = false;
  disabled = false;
  constructor() {}

  ngOnInit(): void {}

  onIncrement() {
    this.counter++;
  }

  onDecrement() {
    this.counter--;
  }

  onReset() {
    this.counter = 0;
  }
}
