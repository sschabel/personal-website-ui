import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [ChipsModule, EditorModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.scss'
})
export class ArticleEditorComponent implements OnInit {

  articleForm!: FormGroup;
  maxTagsAllowed: number = 5;

  ngOnInit(): void {
      this.articleForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required]),
        tags: new FormControl('', Validators.required)
      });
  }


}
