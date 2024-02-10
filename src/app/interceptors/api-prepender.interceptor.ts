import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "environments/environment";

@Injectable()
export class ApiPrependerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone(
      {
        url: this.prependApiBaseUrl(req.url),
      });
    return next.handle(req);
  }

  private prependApiBaseUrl(url: string): string {
    return `${environment.apiUrl}${url}`;
  }
  
}
