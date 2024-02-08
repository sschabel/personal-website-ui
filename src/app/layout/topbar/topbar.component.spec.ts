import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TopbarComponent } from './topbar.component';
import { SimpleMenuItem } from '@models/simple-menu-item';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { WindowService } from '@services/window.service';
import { GlobalStore } from '@ngrx/global.store';

describe('TopbarComponent', () => {
  let cut: TopbarComponent; // TopbarComponent is our CUT (Class Under Test)
  let fixture: ComponentFixture<TopbarComponent>;
  let router: Router;
  const routes: Routes = [
    { path: 'test', redirectTo: 'test' }
  ];
  let windowService: WindowService;
  let store: GlobalStore;

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [TopbarComponent,
        RouterTestingModule.withRoutes(routes)]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopbarComponent);
    router = TestBed.inject(Router);
    store = TestBed.inject(GlobalStore);
    windowService = TestBed.inject(WindowService);
    cut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(cut).toBeTruthy();
  });

  it('#ngOnInit() should set menuItems', () => {
    // given
    spyOn(store, 'menuItems');
    // when
    cut.ngOnInit();
    // then
    expect(store.menuItems).toHaveBeenCalled();
  });

  it('#setupCurrentMenuIndex() should set currentMenuItemIndex', () => {
    // given
    let menuItem: SimpleMenuItem = new SimpleMenuItem(1, 'test', false, undefined, '/test');
    cut.menuItems = [];
    cut.menuItems.push(menuItem);
    let navEndEvent: NavigationEnd = new NavigationEnd(1, '/test', '/test');
    // when
    cut.setupCurrentMenuIndex(navEndEvent);
    // then
    expect(cut.currentMenuItemIndex).toEqual(0);
  });

  it('#setupCurrentMenuIndex() should set not set currentMenuItemIndex', () => {
    // given
    let menuItem: SimpleMenuItem = new SimpleMenuItem(1, 'another-test', false, undefined, '/another-url');
    cut.menuItems = [];
    cut.menuItems.push(menuItem);
    let navEndEvent: NavigationEnd = new NavigationEnd(1, '/test', '/test');
    // when
    cut.setupCurrentMenuIndex(navEndEvent);
    // then
    expect(cut.currentMenuItemIndex).toEqual(-1);
  });

  it('#triggerAction() should route user when menuItem has routerLink', () => {
    // given
    spyOn(router, 'navigateByUrl');
    const menuItem: SimpleMenuItem = new SimpleMenuItem(1, 'Test', false, undefined, '/test');
    // when
    cut.triggerAction(menuItem);
    // then
    expect(router.navigateByUrl).toHaveBeenCalledWith('/test');
  });

  it('#triggerAction() should change window HREF when menuItem has url', () => {
    // given
    spyOn(windowService, 'setHref');
    const menuItem: SimpleMenuItem = new SimpleMenuItem(1, 'Test', false, undefined, undefined, 'test');
    // when
    cut.triggerAction(menuItem);
    // then
    expect(windowService.setHref).toHaveBeenCalled();
  });

  it('#triggerAction() should do nothing when menuItem has no routerLink or url', () => {
    // given
    spyOn(router, 'navigateByUrl');
    spyOn(windowService, 'setHref');
    const menuItem: SimpleMenuItem = new SimpleMenuItem(1, 'Test', false);
    // when
    cut.triggerAction(menuItem);
    // then
    expect(router.navigateByUrl).toHaveBeenCalledTimes(0);
    expect(windowService.setHref).toHaveBeenCalledTimes(0);
  });

  it('#isActive() should return true if currentMenuItemIndex equals menuItemIndex', () => {
    // given
    let menuItem = new SimpleMenuItem(1, 'Test', false);
    cut.menuItems = [];
    cut.menuItems.push(menuItem);
    cut.currentMenuItemIndex = 0;
    // when
    let result: boolean = cut.isActive(menuItem);
    // then
    expect(result).toBeTrue();
  });

  it('#isActive() should return false if currentMenuItemIndex does not equal menuItemIndex', () => {
    // given
    let menuItem = new SimpleMenuItem(1, 'Test', false);
    let otherMenuItem = new SimpleMenuItem(2, 'Another Test', false);
    cut.menuItems = [];
    cut.menuItems.push(menuItem);
    cut.currentMenuItemIndex = 0;
    // when
    let result: boolean = cut.isActive(otherMenuItem);
    // then
    expect(result).toBeFalse();
  });

  it('#isActive() should return false if menuItem does not exist in menuItems array', () => {
    // given
    let menuItem = new SimpleMenuItem(1, 'Test', false);
    cut.menuItems = [];
    cut.currentMenuItemIndex = 0;
    // when
    let result: boolean = cut.isActive(menuItem);
    // then
    expect(result).toBeFalse();
  });

  it('#isActive() should return false if currentMenuItemIndex is -1', () => {
    // given
    let menuItem = new SimpleMenuItem(1, 'Test', false);
    cut.menuItems = [];
    cut.menuItems.push(menuItem);
    cut.currentMenuItemIndex = -1;
    // when
    let result: boolean = cut.isActive(menuItem);
    // then
    expect(result).toBeFalse();
  });


});
