import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { counterReducer } from './counter/state/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ],
};
