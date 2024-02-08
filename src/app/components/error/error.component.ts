import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalStore } from 'app/ngrx/global.store';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {

  error: Error | null = null;

  constructor(private store: GlobalStore) {}

  ngOnInit(): void {
    this.error = this.store.lastError();
  }


}
