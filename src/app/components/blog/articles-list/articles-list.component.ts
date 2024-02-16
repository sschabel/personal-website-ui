import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '@models/article';
import { GlobalStore } from '@ngrx/global.store';
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

  @Input()
  editMode: boolean = false;
  @Output()
  editArticleEvent: EventEmitter<Article | null> = new EventEmitter<Article | null>();
  articles: Article[] = [];
  quillModules: any = {
    toolbar: false
  };

  constructor(private blogService: BlogService, private store: GlobalStore) { }

  ngOnInit(): void {
    this.store.updateLoading(true);
    this.blogService.getAllArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
      this.store.updateLoading(false);
    });
  }

  editArticle(article: Article): void {
    this.editArticleEvent.emit(article);
  }

  newArticle(): void {
    this.editArticleEvent.emit(null);
  }

}
