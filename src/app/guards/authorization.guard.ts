import { inject } from '@angular/core';
import { CanMatchFn, Route, Router } from '@angular/router';
import { User } from '@models/user';
import { GlobalStore } from '@ngrx/global.store';
import { AuthService } from '@services/auth.service';
import { Observable } from 'rxjs';

export const authorizationGuard: CanMatchFn = (route, state) => {
  let authService: AuthService = inject(AuthService);
  let router: Router = inject(Router);
  let store: GlobalStore = inject(GlobalStore);
  
  if(route.data === undefined) {
    return goToNotAuthorized(router);
  }

  if(isUserAuthorized(store.user(), route)) {
    return true;
  } else { // send user to the Not Authorized page if they do not have the appropriate authorities/privileges
    if(authService.getBearerToken()) {
      let isAuthorized: Observable<boolean> = new Observable<boolean>((authorized) => {
        authService.getUserDetails().subscribe((user: User) => {
          store.updateUser(user);
          authorized.next(isUserAuthorized(user, route));
        });
      })
      return isAuthorized;
    } else {
      return goToNotAuthorized(router);
    }
  }
};

function isUserAuthorized(user: User | null, route: Route): boolean {
  if(user === null) {
    return false;
  }
  let index: number | undefined = user.authorities.findIndex((item: string) => item === route.data!['authority']);
  if(index !== undefined && index !== -1) {
    return true;
  } else {
    return false;
  }
}

function goToNotAuthorized(router: Router): boolean {
  router.navigateByUrl('/not-authorized');
  return false;
}
