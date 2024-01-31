import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [AnimateOnScrollModule, ButtonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  gitHubUrl:string = 'https://github.com/sschabel';
  professionalDetailsUrl: string = '/professional-details';

  constructor(private router: Router){}

  public goToGithub(): void {
    window.location.href = this.gitHubUrl;
  }

  public goToProfessionalDetails(): void {
    this.router.navigateByUrl(this.professionalDetailsUrl);
  }

}
