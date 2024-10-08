import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), FlexLayoutModule],
}).catch((err) => console.error(err));
