import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(p => p.HomeModule)
            .catch(console.error)
    },
    {
        path: 'generic',
        loadChildren: () => import('./pages/generic-decorators/generic-decorators.module').then(p => p.GenericDecoratorsModule)
            .catch(console.error)
    },
    {
        path: 'ts-decors',
        loadChildren: () => import('./pages/ts-decorators/ts-decorators.module').then(p => p.TsDecoratorsModule)
            .catch(console.error)
    },
    {
        path: 'ww-decors',
        loadChildren: () => import('./pages/webworkers/webworkers.module').then(p => p.WebworkersModule)
            .catch(console.error)
    },
    {
        path: 'angular',
        loadChildren: () => import('./pages/angular-decorators/angular-decorators.module').then(p => p.AngularDecoratorsModule)
            .catch(console.error)
    },
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(routes);
