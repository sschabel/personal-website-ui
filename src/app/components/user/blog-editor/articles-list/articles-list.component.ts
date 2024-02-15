import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '@models/article';
import { BlogService } from '@services/blog.service';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [ButtonModule, ChipModule, DividerModule, EditorModule, FormsModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] = [];
  quillModules: any = {
    toolbar: false
  };

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getAllArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

  editArticle(article: Article): void {
    this.router.navigateByUrl('/user/blog-editor/article');
  }

  newArticle(): void {
    this.router.navigateByUrl('/user/blog-editor/article');
  }

}
