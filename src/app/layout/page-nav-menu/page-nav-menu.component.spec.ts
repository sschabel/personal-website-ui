import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavMenuComponent } from './page-nav-menu.component';

describe('PageNavMenuComponent', () => {
  let component: PageNavMenuComponent;
  let fixture: ComponentFixture<PageNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNavMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
