import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authorizationGuard } from './authorization.guard';

describe('authorizationGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authorizationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
