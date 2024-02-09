import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FooterComponent } from '@layout/footer/footer.component';
import { TopbarComponent } from '@layout/topbar/topbar.component';
import { RouterOutlet } from '@angular/router';
import { GlobalErrorHandler } from '@handler/global-error.handler';
import { SimpleMenuItem } from '@models/simple-menu-item';
import { GlobalStore } from '@ngrx/global.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopbarComponent, FooterComponent, RouterOutlet],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(readonly store: GlobalStore){}
  
  ngOnInit(): void {
    this.store.updateMenuItems(this.setupMenu());
  }

  private setupMenu(): SimpleMenuItem[] {
    let landing: SimpleMenuItem = new SimpleMenuItem(1, 'Home', false, 'fas fa-house-chimney', '/');
    let blog: SimpleMenuItem = new SimpleMenuItem(2, 'Blog', false, 'fas fa-blog', '/blog');
    let professionalDetails: SimpleMenuItem = new SimpleMenuItem(3, 'Professional Details', false, 'fas fa-user-tie', '/professional-details');
    let github: SimpleMenuItem = new SimpleMenuItem(4, 'GitHub', true, 'fa-brands fa-github', undefined, 'https://github.com/sschabel');
    let login: SimpleMenuItem = new SimpleMenuItem(5, 'Login', false, 'fas fa-right-to-bracket', '/login');

    let menuItems: SimpleMenuItem[] = [];
    menuItems.push(landing);
    menuItems.push(blog);
    menuItems.push(professionalDetails);
    menuItems.push(github);
    menuItems.push(login);
    return menuItems;
  }

}
