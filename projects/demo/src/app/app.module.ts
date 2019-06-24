import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material';
import {GenericDecoratorsModule} from './pages/generic-decorators/generic-decorators.module';
import {JsDecoratorsModule} from './pages/js-decorators/js-decorators.module';
import {TsDecoratorsModule} from './pages/ts-decorators/ts-decorators.module';
import {WebworkersModule} from './pages/webworkers/webworkers.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {AppRoute} from './app.route';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpClientModule,
        CoreModule,
        AppRoute,
        BrowserModule,
        MatBadgeModule,
        MatInputModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        GenericDecoratorsModule,
        JsDecoratorsModule,
        TsDecoratorsModule,
        WebworkersModule,
        SharedModule,
        RouterModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),
    ],
    exports: [

    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
