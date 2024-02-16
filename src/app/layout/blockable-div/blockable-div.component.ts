import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { BlockableUI } from 'primeng/api';

@Component({
  selector: 'app-blockable-div',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blockable-div.component.html',
  styleUrl: './blockable-div.component.scss'
})
export class BlockableDivComponent implements BlockableUI{
  
  constructor(private el: ElementRef) {}

  getBlockableElement(): HTMLElement { 
      let element: any = this.el.nativeElement.children[0];
      return element;
  }

}
