import { Component, ErrorHandler } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { RouterOutlet } from '@angular/router';
import { GlobalErrorHandler } from './handler/global-error.handler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopbarComponent, FooterComponent, RouterOutlet],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
