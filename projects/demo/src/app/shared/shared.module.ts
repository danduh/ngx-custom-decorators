import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorComponent} from './components/navigator/navigator.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MovieCardComponent} from './components/movie-card/movie-card.component';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
];

const APP_COMPONENTS = [
    NavigatorComponent,
    HeaderComponent,
    MovieCardComponent,
];

@NgModule({
    declarations: [
        ...APP_COMPONENTS,
    ],
    exports: [
        ...APP_COMPONENTS,
        ...MATERIAL_MODULES,
        RouterModule,
        FormsModule,
    ],
    imports: [
        ...MATERIAL_MODULES,
        FormsModule,
        RouterModule,
        CommonModule,
    ]
})
export class SharedModule {
}
