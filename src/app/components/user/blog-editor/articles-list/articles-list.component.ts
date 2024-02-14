import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {

  constructor(private router: Router){}

  editArticle(): void {
    this.router.navigateByUrl('/user/blog-editor/article');
  }

}
