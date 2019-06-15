import {Component, OnInit} from '@angular/core';
import {deviceBP, DeviceBPState, deviceDetect} from '../../../../../../src/lib/common';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-angular-decorators',
    templateUrl: './angular-decorators.component.html',
    styleUrls: ['./angular-decorators.component.css']
})
export class AngularDecoratorsComponent implements OnInit {
    @deviceDetect() public device;

    @deviceBP(true) public deviceObs: Observable<DeviceBPState>;

    @deviceBP() public deviceStatic: Observable<DeviceBPState>;

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
