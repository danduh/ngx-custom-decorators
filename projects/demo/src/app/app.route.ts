import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'generic',
    //     pathMatch: 'full'
    // },
    {
        path: 'generic',
        loadChildren: () => import('./pages/generic-decorators/generic-decorators.module').then(p => p.GenericDecoratorsModule)
    },
    {
        path: 'ts-decors',
        loadChildren: () => import('./pages/ts-decorators/ts-decorators.module').then(p => p.TsDecoratorsModule)
    },
    {
        path: 'ww-decors',
        loadChildren: () => import('./pages/webworkers/webworkers.module').then(p => p.WebworkersModule)
    },
    {
        path: 'angular',
        loadChildren: () => import('./pages/angular-decorators/angular-decorators.module').then(p => p.AngularDecoratorsModule)
    },
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(routes);
