import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  articleForm!: FormGroup;
  maxTagsAllowed: number = 5;

  constructor(private blogService: BlogService, private router: Router){}

  ngOnInit(): void {
      this.articleForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required]),
        tags: new FormControl('', [Validators.required])
      });
  }

  cancel(): void {
    this.articleForm.reset();
    this.router.navigateByUrl('/user/blog-editor');
  }

  submitArticle(): void {
    if(this.articleForm.valid) {
      this.blogService.createArticle(new Article(this.title?.value, this.content?.value, this.tags?.value))
      .subscribe((response: Article) => {
        this.router.navigateByUrl('/user/blog-editor');
      });
    }
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
