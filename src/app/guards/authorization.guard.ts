import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { GlobalStore } from '@ngrx/global.store';

export const authorizationGuard: CanMatchFn = (route, state) => {
  let router: Router = inject(Router);
  let store: GlobalStore = inject(GlobalStore);
  
  if(route.data === undefined) {
    return goToNotAuthorized(router);
  }

  let index: number | undefined = store.user()?.authorities.findIndex((item: string) => item === route.data!['authority']);
  if(index !== undefined && index !== -1) {
    return true;
  } else { // send user to the Not Authorized page if they do not have the appropriate authorities/privileges
    return goToNotAuthorized(router);
  }
};

function goToNotAuthorized(router: Router): boolean {
  router.navigateByUrl('/not-authorized');
  return false;
}
