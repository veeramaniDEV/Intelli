import {provideHttpClient, withFetch} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling} from '@angular/router';
import Aura from '@primeng/themes/aura';
import {providePrimeNG} from 'primeng/config';
import {appRoutes} from './app.routes';
import {definePreset} from '@primeng/themes';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{orange.50}',
            100: '{orange.100}',
            200: '{orange.200}',
            300: '{orange.300}',
            400: '{orange.400}',
            500: '{orange.500}',
            600: '{orange.600}',
            700: '{orange.700}',
            800: '{orange.800}',
            900: '{orange.900}',
            950: '{orange.950}'
        }
    }
});

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: MyPreset, options: { darkModeSelector: '.app-dark' } } })
    ]
};
