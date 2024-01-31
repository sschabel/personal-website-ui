import { Component, OnInit, inject } from '@angular/core';
import { GlobalStore } from 'app/ngrx/global.store';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {

  readonly store = inject(GlobalStore);
  error: Error | null = null;

  ngOnInit(): void {
    this.error = this.store.lastError();
  }


}
