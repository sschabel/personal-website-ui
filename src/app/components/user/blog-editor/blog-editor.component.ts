import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticlesListComponent } from '@components/blog/articles-list/articles-list.component';
import { GlobalComponentStore } from '@components/store/global-component.store';
import { Article } from '@models/article';
import { ArticleEditorComponent } from './article-editor/article-editor.component';

@Component({
  selector: 'app-blog-editor',
  standalone: true,
  imports: [ArticleEditorComponent, ArticlesListComponent, RouterModule],
  templateUrl: './blog-editor.component.html',
  styleUrl: './blog-editor.component.scss'
})
export class BlogEditorComponent {

onListView: boolean = true;

constructor(private componentStore: GlobalComponentStore){}

  openArticleEditor(article: Article | null): void {
    this.componentStore.updateCurrentArticle(article);
    this.onListView = false;
  }

  closeArticleEditor(event: any): void {
    this.onListView = true;
  }

}
