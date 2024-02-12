import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(module => {
    if (!environment.production) {
      // Only enable debug tools in development mode
      import('@angular/platform-browser').then(platformBrowser => {
        const applicationRef = module.injector.get(ApplicationRef);
        const componentRef = applicationRef.components[0];
      });
    }
  })
  .catch(err => console.error(err));
