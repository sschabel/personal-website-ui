import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleMenuItem } from '@models/simple-menu-item';
import { ArrayUtils } from '@utils/array-utils';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  
  menuItems: SimpleMenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setupMenu();
  }

  private setupMenu(): void {
    let landing: SimpleMenuItem = new SimpleMenuItem(true, 'Home', 'fas fa-house-chimney', '/');
    let blog: SimpleMenuItem = new SimpleMenuItem(false, 'Blog', 'fas fa-blog', '/blog');
    let professionalDetails: SimpleMenuItem = new SimpleMenuItem(false, 'Professional Details', 'fas fa-user-tie', '/professional-details');
    let github: SimpleMenuItem = new SimpleMenuItem(false, 'GitHub', 'fa-brands fa-github', undefined, 'https://github.com/sschabel');

    this.menuItems.push(landing);
    this.menuItems.push(blog);
    this.menuItems.push(professionalDetails);
    this.menuItems.push(github);
  }

  triggerAction(menuItem: SimpleMenuItem): void {
    let currentActiveMenuItem: SimpleMenuItem = ArrayUtils.getItemByProperty(this.menuItems, 'active', true);
    if(currentActiveMenuItem) {
      currentActiveMenuItem.active = false;
    }
    menuItem.active = true;

    if(menuItem.routerLink) {
      this.router.navigateByUrl(menuItem.routerLink);
    }

    if(menuItem.url) {
      window.location.href = menuItem.url;
    }

  }

}
