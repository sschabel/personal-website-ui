import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render learn more button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#learnMoreButton')?.textContent).toContain('Learn More');
  });

  it('should render GitHub button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#githubButton')?.textContent).toContain('Github');
  });

  it('learnMoreButton click should call #goToProfessionalDetails()', () => {
    // given
    spyOn(component, 'goToProfessionalDetails').and.returnValue();
    const learnMoreButton = fixture.debugElement.nativeElement.querySelector('#learnMoreButton');
    // when
    learnMoreButton.click();
    // then
    expect(component.goToProfessionalDetails).toHaveBeenCalled();
  });

  it('githubButton click should call #goToGithub()', () => {
    // given
    spyOn(component, 'goToGithub').and.returnValue();
    const githubButton = fixture.debugElement.nativeElement.querySelector('#githubButton');
    // when
    githubButton.click();
    // then
    expect(component.goToGithub).toHaveBeenCalled();
  });

});
