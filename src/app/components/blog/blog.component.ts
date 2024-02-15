import { Component } from '@angular/core';
import { ArticlesListComponent } from './articles-list/articles-list.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ArticlesListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
