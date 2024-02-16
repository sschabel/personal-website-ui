import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListComponent } from './articles-list.component';
import { BlogService } from '@services/blog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticlesListComponent', () => {
  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesListComponent, HttpClientTestingModule],
      providers: [BlogService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
