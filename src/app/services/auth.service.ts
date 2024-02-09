import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest } from "@models/login-request";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class AuthService {

    apiBaseUrl: string = '/put-api-base-url-here';
    loginUrl: string = '/put-login-url-here';

    constructor(private http: HttpClient){}

    public loginRequest(username: string, password: string): Observable<string> {
        return this.http.post<string>(`${this.apiBaseUrl}${this.loginUrl}`, new LoginRequest(username, password));
    }

}