import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "@services/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let bearerToken: string | null = this.authService.getBearerToken();
    if (bearerToken) {
      req = req.clone(
        {
          headers: req.headers.set('Authorization', `Bearer ${bearerToken}`)
        });
    }
    return next.handle(req);
  }
  
}
