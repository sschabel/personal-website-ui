import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-professional-details',
  standalone: true,
  imports: [AnimateOnScrollModule, PanelModule],
  templateUrl: './professional-details.component.html',
  styleUrl: './professional-details.component.scss'
})
export class ProfessionalDetailsComponent {

}
