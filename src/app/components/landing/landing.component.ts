import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [AnimateOnScrollModule, ButtonModule, PanelModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  gitHubUrl:string = 'https://github.com/sschabel';

  public goToGithub(): void {
    window.location.href = this.gitHubUrl;
  }

}
