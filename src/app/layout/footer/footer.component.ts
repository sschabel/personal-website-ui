import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleMenuItem } from '@models/simple-menu-item';
import { GlobalStore } from '@ngrx/global.store';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonModule, CommonModule, DividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  gitHubUrl:string = 'https://github.com/sschabel';
  xUrl:string = 'https://x.com';
  linkedInUrl:string = 'https://linkedin.com';
  readonly store = inject(GlobalStore);
  menuItems: SimpleMenuItem[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.menuItems = this.store.menuItems().filter(item => !item.isExternal);
  }

  triggerAction(menuItem: SimpleMenuItem): void {
    if(menuItem.routerLink) { // only allow internal links to be used here
      this.router.navigateByUrl(menuItem.routerLink);
    }
  }

  public goToGithub(): void {
    window.location.href = this.gitHubUrl;
  }

  public goToX(): void {
    window.location.href = this.xUrl;
  }

  public goToLinkedIn(): void {
    window.location.href = this.linkedInUrl;
  }

}
