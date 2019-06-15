import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebworkersComponent} from './webworkers.component';
import {CoreModule} from '../../core/core.module';

@NgModule({
    declarations: [
        WebworkersComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
    ]
})
export class WebworkersModule {
}
