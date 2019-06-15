import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GenericDecoratorsComponent} from './generic-decorators.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: GenericDecoratorsComponent
    },
];

export const GenericRoutes: ModuleWithProviders = RouterModule.forChild(routes);


@NgModule({
    declarations: [
        GenericDecoratorsComponent
    ],
    imports: [
        SharedModule,
        GenericRoutes,
        CommonModule
    ]
})
export class GenericDecoratorsModule {
}
