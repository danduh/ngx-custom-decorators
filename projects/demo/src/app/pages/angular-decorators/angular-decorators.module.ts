import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularDecoratorsComponent} from './angular-decorators.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: AngularDecoratorsComponent
    },
];

export const AngularRoutes: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    declarations: [
        AngularDecoratorsComponent,
    ],
    imports: [
        CommonModule,
        AngularRoutes,
        SharedModule,
    ]
})
export class AngularDecoratorsModule {
}
