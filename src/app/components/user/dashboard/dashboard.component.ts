import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { GlobalStore } from '@ngrx/global.store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  user: User | null = null;

  constructor(private store: GlobalStore){}

  ngOnInit(): void {
      this.user = this.store.user();
  }





}
