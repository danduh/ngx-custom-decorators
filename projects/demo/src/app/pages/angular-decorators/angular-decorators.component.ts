import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {deviceBP, DeviceBPState, matchMedia} from 'decorators/common';

@Component({
    selector: 'app-angular-decorators',
    templateUrl: './angular-decorators.component.html',
    styleUrls: ['./angular-decorators.component.css']
})
export class AngularDecoratorsComponent implements OnInit {
    @matchMedia() public device;

    @deviceBP(true) public deviceObs: Observable<DeviceBPState>;

    @deviceBP() public deviceStatic: DeviceBPState;

    getKeys(obj) {
        return Object.keys(obj);
    }

    constructor() {
    }

    ngOnInit() {
    }

    showDevice() {
        console.log(this.device);
        console.log(this.deviceStatic);
    }

}
