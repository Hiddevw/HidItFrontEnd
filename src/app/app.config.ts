import { ApplicationConfig } from '@angular/core';
import { ɵROUTER_PROVIDERS as ROUTER_PROVIDERS } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { appRoutes } from './app-routing.module';

export const appConfig: ApplicationConfig = {
providers: [ROUTER_PROVIDERS, provideClientHydration()]
};
