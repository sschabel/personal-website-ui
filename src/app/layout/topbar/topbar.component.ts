import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, effect, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SimpleMenuItem } from '@models/simple-menu-item';
import { GlobalStore } from 'app/ngrx/global.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit, OnDestroy {
  
  menuItems: SimpleMenuItem[] = [];
  currentMenuItemIndex: number = -1;
  navEndSub: Subscription | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navEndSub = this.router.events.subscribe((event) => {
      console.log(event instanceof NavigationEnd);
      if(event instanceof NavigationEnd) {
        let menuItemIndex: number = this.menuItems.findIndex((item: SimpleMenuItem) => item.routerLink === event.url);
        this.currentMenuItemIndex = menuItemIndex;
      }
  });
    this.setupMenu();
  }

  ngOnDestroy(): void {
    if(this.navEndSub) {
      this.navEndSub.unsubscribe();
    }
  }

  private setupMenu(): void {
    let landing: SimpleMenuItem = new SimpleMenuItem(1, 'Home', 'fas fa-house-chimney', '/');
    let blog: SimpleMenuItem = new SimpleMenuItem(2, 'Blog', 'fas fa-blog', '/blog');
    let professionalDetails: SimpleMenuItem = new SimpleMenuItem(3, 'Professional Details', 'fas fa-user-tie', '/professional-details');
    let github: SimpleMenuItem = new SimpleMenuItem(4, 'GitHub', 'fa-brands fa-github', undefined, 'https://github.com/sschabel');

    this.menuItems.push(landing);
    this.menuItems.push(blog);
    this.menuItems.push(professionalDetails);
    this.menuItems.push(github);
  }

  triggerAction(menuItem: SimpleMenuItem): void {
    if(menuItem.routerLink) {
      this.router.navigateByUrl(menuItem.routerLink);
    }

    if(menuItem.url) {
      // set the currentMenuItemIndex for this since it won't trigger a router event
      let menuItemIndex: number = this.menuItems.findIndex((item: SimpleMenuItem) => item.id === menuItem.id);
      this.currentMenuItemIndex = menuItemIndex;
      // redirect the user to the specificed URL
      window.location.href = menuItem.url;
    }

  }

  isActive(menuItem: SimpleMenuItem): boolean {
    let menuItemIndex: number = this.menuItems.findIndex((item: SimpleMenuItem) => item.id === menuItem.id);
    if(this.currentMenuItemIndex !== -1
        && menuItemIndex !== -1
        && this.currentMenuItemIndex === menuItemIndex) {
      return true;
    } else {
      return false;
    }
  }

}
