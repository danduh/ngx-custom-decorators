import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material';
import {WebworkersComponent} from './components/webworkers/webworkers.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        WebworkersComponent
    ],
    imports: [
        BrowserModule,
        MatBadgeModule,
        MatInputModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
