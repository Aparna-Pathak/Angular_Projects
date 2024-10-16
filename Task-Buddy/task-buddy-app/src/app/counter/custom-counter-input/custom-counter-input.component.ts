import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.scss',
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;

  ngOnInit(): void {}

  onAdd() {
    console.log(this.value);
  }
}
