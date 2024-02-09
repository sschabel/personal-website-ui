import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { GlobalErrorHandler } from '@handler/global-error.handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
    provideHttpClient(),
    [{provide: ErrorHandler, useClass: GlobalErrorHandler}] // use our custom, Global Error Handler
  ]
};
