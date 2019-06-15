import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {GenericDecoratorsModule} from './pages/generic-decorators/generic-decorators.module';
import {JsDecoratorsModule} from './pages/js-decorators/js-decorators.module';
import {TsDecoratorsModule} from './pages/ts-decorators/ts-decorators.module';
import {WebworkersModule} from './pages/webworkers/webworkers.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {AppRoute} from './app.route';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
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
