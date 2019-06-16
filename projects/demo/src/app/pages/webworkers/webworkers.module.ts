import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebworkersComponent} from './webworkers.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: WebworkersComponent
    },
];

export const WWRoutes: ModuleWithProviders = RouterModule.forChild(routes);


@NgModule({
    declarations: [
        WebworkersComponent
    ],
    imports: [
        WWRoutes,
        CommonModule,
        SharedModule,
    ]
})
export class WebworkersModule {
}
