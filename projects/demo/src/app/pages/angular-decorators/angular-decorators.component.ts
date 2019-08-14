import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {deviceBP, DeviceBPState, matchMedia} from 'decorators/common';

@Component({
    selector: 'app-angular-decorators',
    templateUrl: './angular-decorators.component.html',
    styleUrls: ['./angular-decorators.component.css']
})
export class AngularDecoratorsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
