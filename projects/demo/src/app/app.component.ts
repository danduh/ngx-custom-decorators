import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public opened = true;
    title = 'Ngx-Custom-Decorators';

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIcon(
            `github-icon`,
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
        ).addSvgIcon(
            `twitter-icon`,
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
        );
    }

    ngOnInit(): void {
    }

}
