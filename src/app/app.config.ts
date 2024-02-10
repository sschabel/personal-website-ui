import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GlobalErrorHandler } from '@handler/global-error.handler';
import { BearerTokenInterceptor } from './interceptors/bearer-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerTokenInterceptor,
      multi: true,
    },
    [{provide: ErrorHandler, useClass: GlobalErrorHandler}] // use our custom, Global Error Handler
  ]
};
