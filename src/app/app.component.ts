import { Component, ElementRef, ErrorHandler, OnInit, ViewChild, effect } from '@angular/core';
import { FooterComponent } from '@layout/footer/footer.component';
import { TopbarComponent } from '@layout/topbar/topbar.component';
import { RouterOutlet } from '@angular/router';
import { GlobalErrorHandler } from '@handler/global-error.handler';
import { SimpleMenuItem } from '@models/simple-menu-item';
import { GlobalStore } from '@ngrx/global.store';
import { AuthService } from '@services/auth.service';
import { SpinnerComponent } from '@components/spinner/spinner.component';
import { BlockUIModule } from 'primeng/blockui';
import { BlockableDivComponent } from "./layout/blockable-div/blockable-div.component";

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [AuthService, { provide: ErrorHandler, useClass: GlobalErrorHandler }],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [BlockUIModule, TopbarComponent, FooterComponent, RouterOutlet, SpinnerComponent, BlockableDivComponent]
})
export class AppComponent implements OnInit {

  loading: boolean = false;
  topMenuItems: SimpleMenuItem[] = [];

  constructor(private authService: AuthService, readonly store: GlobalStore){
    effect(() => {
      this.loading = this.store.loading();
    });
  }

  ngOnInit(): void {
    this.store.updateMenuItems(this.setupMenu());
    this.topMenuItems = this.store.menuItems();
    this.authService.populateCsrfToken().subscribe(() => this.store.updateLoading(false));
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
