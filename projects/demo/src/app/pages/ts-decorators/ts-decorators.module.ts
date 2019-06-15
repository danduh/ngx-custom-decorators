import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TsDecoratorsComponent} from './ts-decorators.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: TsDecoratorsComponent
    },
];

export const TsDecorsRoutes: ModuleWithProviders = RouterModule.forChild(routes);


@NgModule({
    declarations: [
        TsDecoratorsComponent
    ],
    imports: [
        TsDecorsRoutes,
        CommonModule
    ]
})
export class TsDecoratorsModule {
}
