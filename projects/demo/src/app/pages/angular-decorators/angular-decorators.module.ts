import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularDecoratorsComponent} from './angular-decorators.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { StoreDecoratorComponent } from './components/store-decorator/store-decorator.component';

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
        StoreDecoratorComponent,
    ],
    imports: [
        CommonModule,
        AngularRoutes,
        SharedModule,
    ]
})
export class AngularDecoratorsModule {
}
