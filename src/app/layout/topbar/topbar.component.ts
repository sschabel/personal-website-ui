import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { SimpleMenuItem } from '@models/simple-menu-item';
import { WindowService } from '@services/window.service';
import { GlobalStore } from '@ngrx/global.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit, OnDestroy {

  @Input()
  menuItems: SimpleMenuItem[] = [];
  currentMenuItemIndex: number = -1;
  navEndSub: Subscription | null = null;

  constructor(private router: Router, readonly store: GlobalStore, private windowService: WindowService) { }

  ngOnInit(): void {
    this.navEndSub = this.router.events.subscribe((event) => {
      this.setupCurrentMenuIndex(event);
    });
  }

  ngOnDestroy(): void {
    if (this.navEndSub) {
      this.navEndSub.unsubscribe();
    }
  }

  setupCurrentMenuIndex(event: Event): void {
    if (event instanceof NavigationEnd) {
      let menuItemIndex: number = this.menuItems.findIndex((item: SimpleMenuItem) => item.routerLink === event.url);
      this.currentMenuItemIndex = menuItemIndex;
    }
  }

  triggerAction(menuItem: SimpleMenuItem): void {
    if (menuItem.routerLink) {
      this.router.navigateByUrl(menuItem.routerLink);
    }

    if (menuItem.url) {
      // set the currentMenuItemIndex for this since it won't trigger a router event
      let menuItemIndex: number = this.menuItems.findIndex((item: SimpleMenuItem) => item.id === menuItem.id);
      this.currentMenuItemIndex = menuItemIndex;
      // redirect the user to the specificed URL
      this.windowService.setHref(menuItem.url);
    }

  }

  isActive(menuItem: SimpleMenuItem): boolean {
    let menuItemIndex: number = this.menuItems.findIndex((item: SimpleMenuItem) => item.id === menuItem.id);
    if (this.currentMenuItemIndex !== -1
      && menuItemIndex !== -1
      && this.currentMenuItemIndex === menuItemIndex) {
      return true;
    } else {
      return false;
    }
  }

  isLoginItem(menuItem: SimpleMenuItem): boolean {
    return menuItem.label === 'Login';
  }

}
