import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GlobalStore } from "@ngrx/global.store";
import { Observable } from "rxjs";

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {

  constructor(private store: GlobalStore) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let bearerToken: string | null = this.store.bearerToken();
    if (bearerToken) {
      req = req.clone(
        {
          headers: req.headers.set('Authorization', `Bearer ${bearerToken}`)
        });
    }
    return next.handle(req);
  }
  
}
