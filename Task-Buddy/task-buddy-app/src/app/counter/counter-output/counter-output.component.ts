import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CounterOutputComponent implements OnInit {
  counter$!: Observable<CounterState>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
