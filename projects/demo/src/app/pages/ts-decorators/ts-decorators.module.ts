import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TsDecoratorsComponent} from './ts-decorators.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

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
        CommonModule,
        SharedModule,
    ]
})
export class TsDecoratorsModule {
}
