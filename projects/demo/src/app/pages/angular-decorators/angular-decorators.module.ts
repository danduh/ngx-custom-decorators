import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularDecoratorsComponent} from './angular-decorators.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { StoreDecoratorComponent } from './components/store-decorator/store-decorator.component';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './effects/app.effects';
import {reducers} from './reducers';

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
        StoreModule.forFeature('decoratorsModule', reducers),
        EffectsModule.forFeature([AppEffects]),
    ]
})
export class AngularDecoratorsModule {
}
