import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from '@models/login-response';
import { ReCaptchaActionEnum } from '@models/recaptcha-action.enum';
import { GlobalStore } from '@ngrx/global.store';
import { AuthService } from '@services/auth.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule, CardModule, CommonModule,
    InputTextModule, PasswordModule, ReactiveFormsModule],
  providers: [
    AuthService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  loginErrorMessage: string | null = null;
  loginForm!: FormGroup;

  constructor(private authService: AuthService, readonly store: GlobalStore,
    private reCaptchaV3Service: ReCaptchaV3Service,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.reCaptchaV3Service.execute(ReCaptchaActionEnum.LOGIN).subscribe((reCaptchaToken: string) => {
        this.authService.loginRequest(
          this.loginForm.get('username')?.value, this.loginForm.get('password')?.value, reCaptchaToken)
          .subscribe((response: LoginResponse) => {
            if (response.errorMessage) {
              this.loginErrorMessage = response.errorMessage;
            } else {
              this.loginErrorMessage = null;
              this.authService.setBearerTokenCookie(response.bearerToken);
              this.store.updateUser(response.user);
              this.router.navigateByUrl('/user');
            }
          }
          );
      });
    }
  }

  public get username(): AbstractControl<any> | null {
    return this.loginForm.get('username');
  }

  public get password(): AbstractControl<any> | null {
    return this.loginForm.get('password');
  }



}
