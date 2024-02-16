import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditorComponent } from './article-editor.component';
import { BlogService } from '@services/blog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticleEditorComponent', () => {
  let component: ArticleEditorComponent;
  let fixture: ComponentFixture<ArticleEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleEditorComponent, HttpClientTestingModule],
      providers: [BlogService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
