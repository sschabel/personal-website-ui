import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GlobalErrorHandler } from '@handler/global-error.handler';
import { BearerTokenInterceptor } from './interceptors/bearer-token.interceptor';
import { ApiPrependerInterceptor } from './interceptors/api-prepender.interceptor';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from 'environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule, HttpClientModule, RecaptchaV3Module]),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrependerInterceptor, // prepends the API base url to each HTTP request
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerTokenInterceptor, // adds the Bearer Token to the Authorization header on each HTTP request
      multi: true,
    },
    [{provide: ErrorHandler, useClass: GlobalErrorHandler}], // use our custom, Global Error Handler
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaSiteKey }
  ]
};
