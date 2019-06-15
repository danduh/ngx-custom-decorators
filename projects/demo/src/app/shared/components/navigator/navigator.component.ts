import {Component, Input, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
    @Input() sideNav;

    constructor(private route: Router) {
    }

    ngOnInit() {
    }

}
