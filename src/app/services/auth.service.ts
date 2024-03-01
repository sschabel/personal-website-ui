import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginRequest } from "@models/login-request";
import { LoginResponse } from "@models/login-response";
import { User } from "@models/user";
import { GlobalStore } from "@ngrx/global.store";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class AuthService {

    private csrfUrl: string = '/csrf';
    private loginUrl: string = '/login';
    private logoutUrl: string = '/logout';
    private userUrl: string = '/user';
    private bearerTokenCookieName: string = 'pw-api_bearer';

    constructor(private cookieService: CookieService, private http: HttpClient,
        private router: Router, private store: GlobalStore){}

    public loginRequest(username: string, password: string, reCaptchaToken: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.loginUrl, new LoginRequest(username, password, reCaptchaToken));
    }

    public getUserDetails(): Observable<User> {
        return this.http.get<User>(this.userUrl);
    }

    public populateCsrfToken(): Observable<void> {
        return this.http.get<void>(this.csrfUrl);
    }

    public setBearerTokenCookie(bearerToken: string): void {
            this.cookieService.set(this.bearerTokenCookieName, bearerToken, { path: "/", sameSite: 'Strict', secure: true });
    }

    public getBearerToken(): string {
        return this.cookieService.get(this.bearerTokenCookieName);
    }

    public logout(): void {
        this.http.post<void>(this.logoutUrl, '').subscribe(() => {
            this.store.updateUser(null);
            this.router.navigateByUrl('/logout');
        });
    }

}