import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'TaskDatabase',
  version: 1,
  objectStoresMeta: [
    {
      store: 'tasks',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'date', keypath: 'date', options: { unique: false } },
      ],
    },
  ],
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    FlexLayoutModule,
    BrowserModule,
    importProvidersFrom(NgxIndexedDBModule.forRoot(dbConfig)), // Import the NgxIndexedDBModule here
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
