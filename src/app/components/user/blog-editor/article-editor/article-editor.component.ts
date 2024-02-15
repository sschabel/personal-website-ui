import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalComponentStore } from '@components/store/global-component.store';
import { Article } from '@models/article';
import { BlogService } from '@services/blog.service';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [ButtonModule, ChipsModule, EditorModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.scss'
})
export class ArticleEditorComponent implements OnInit {

  @Output()
  exitArticleEditor: EventEmitter<any> = new EventEmitter();
  articleForm!: FormGroup;
  article: Article | null = null;
  maxTagsAllowed: number = 5;
  digitsOnly: RegExp = /^[0-9]\d*$/

  constructor(private blogService: BlogService, private componentStore: GlobalComponentStore) { }

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      title: new FormControl<string>('', [Validators.required]),
      content: new FormControl<string>('', [Validators.required]),
      tags: new FormControl<string[]>([], [Validators.required]),
      id: new FormControl<number | null>(null, [Validators.min(1), Validators.pattern(this.digitsOnly)])
    });

    this.article = this.componentStore.currentArticle();
    if (this.article) {
      this.title?.setValue(this.article.title);
      this.tags?.setValue(this.article.tags);
      this.content?.setValue(this.article.content);
      this.articleForm.get('id')?.setValue(this.article.id);
    }
  }

  cancel(): void {
    this.cleanupAndCloseOutOfArticleEditor();
  }

  submitArticle(): void {
    if (this.articleForm.valid) {
      if (this.article) {
        this.blogService.updateArticle(new Article(this.title?.value, this.content?.value, this.tags?.value, this.articleForm.get('id')?.value))
        .subscribe((response: Article) => {
          this.cleanupAndCloseOutOfArticleEditor();
        });
      } else {
        this.blogService.createArticle(new Article(this.title?.value, this.content?.value, this.tags?.value))
          .subscribe((response: Article) => {
            this.cleanupAndCloseOutOfArticleEditor();
          });
      }
    }
  }

  cleanupAndCloseOutOfArticleEditor(): void {
    this.articleForm.reset();
    this.componentStore.updateCurrentArticle(null);
    this.exitArticleEditor.emit();
  }

  public get title(): AbstractControl<any> | null {
    return this.articleForm.get('title');
  }

  public get content(): AbstractControl<any> | null {
    return this.articleForm.get('content');
  }

  public get tags(): AbstractControl<any> | null {
    return this.articleForm.get('tags');
  }

}
