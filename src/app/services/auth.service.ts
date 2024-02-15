import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest } from "@models/login-request";
import { LoginResponse } from "@models/login-response";
import { User } from "@models/user";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class AuthService {

    private csrfUrl: string = '/csrf';
    private loginUrl: string = '/login';
    private userUrl: string = '/user';
    private bearerTokenCookieName: string = 'pw-api_bearer';

    constructor(private cookieService: CookieService, private http: HttpClient){}

    public loginRequest(username: string, password: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.loginUrl, new LoginRequest(username, password));
    }

    public getUserDetails(): Observable<User> {
        return this.http.get<User>(this.userUrl);
    }

    public populateCsrfToken(): void {
        this.http.get<void>(this.csrfUrl).subscribe();
    }

    public setBearerTokenCookie(bearerToken: string): void {
            this.cookieService.set(this.bearerTokenCookieName, bearerToken, { path: "/", sameSite: 'Strict', secure: true });
    }

    public getBearerToken(): string {
        return this.cookieService.get(this.bearerTokenCookieName);
    }

}