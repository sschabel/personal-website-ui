import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest } from "@models/login-request";
import { LoginResponse } from "@models/login-response";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class AuthService {

    private csrfUrl: string = '/csrf';
    private loginUrl: string = '/login';

    constructor(private http: HttpClient){}

    public loginRequest(username: string, password: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.loginUrl, new LoginRequest(username, password));
    }

    public populateCsrfToken(): void {
        this.http.get<void>(this.csrfUrl).subscribe();
    }

}