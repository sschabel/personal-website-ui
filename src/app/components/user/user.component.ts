import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TopbarComponent } from '@layout/topbar/topbar.component';
import { SimpleMenuItem } from '@models/simple-menu-item';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, TopbarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  userMenuItems: SimpleMenuItem[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
      this.userMenuItems = this.setupMenu();
  }

  private setupMenu(): SimpleMenuItem[] {
    let dashboard: SimpleMenuItem = new SimpleMenuItem(1, 'Dashboard', false, 'fas fa-chalkboard-user', '/user');
    let blog: SimpleMenuItem = new SimpleMenuItem(2, 'Blog Editor', false, 'fas fa-newspaper', '/user/blog-editor');

    let menuItems: SimpleMenuItem[] = [];
    menuItems.push(dashboard);
    menuItems.push(blog);
    return menuItems;
  }

}
