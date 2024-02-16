import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockableDivComponent } from './blockable-div.component';

describe('BlockableDivComponent', () => {
  let component: BlockableDivComponent;
  let fixture: ComponentFixture<BlockableDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockableDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockableDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
