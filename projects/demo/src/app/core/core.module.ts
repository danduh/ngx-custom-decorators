import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    exports: [
        BrowserAnimationsModule,
    ]
})
export class CoreModule {
}
