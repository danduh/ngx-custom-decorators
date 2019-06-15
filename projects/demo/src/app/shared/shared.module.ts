import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorComponent} from './components/navigator/navigator.component';
import {MatButtonModule, MatSidenavModule, MatTabsModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        NavigatorComponent,
        HeaderComponent
    ],
    exports: [
        NavigatorComponent,
        HeaderComponent,
        MatButtonModule,
        MatSidenavModule,
        MatTabsModule,
        RouterModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatButtonModule,
        MatSidenavModule,
        MatTabsModule,
    ]
})
export class SharedModule {
}
