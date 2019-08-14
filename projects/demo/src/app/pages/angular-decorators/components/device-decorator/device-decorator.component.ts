import {AfterViewInit, Component, OnInit} from '@angular/core';
import {deviceBP, DeviceBPState, matchMedia} from "decorators/common";
import {Observable} from "rxjs";

@Component({
    selector: 'app-device-decorator',
    templateUrl: './device-decorator.component.html',
    styleUrls: ['./device-decorator.component.css']
})
export class DeviceDecoratorComponent implements AfterViewInit {
    @matchMedia() public device;

    @deviceBP(true) public deviceObs: Observable<DeviceBPState>;

    @deviceBP() public deviceStatic: DeviceBPState;

    constructor() {
        console.log(this.deviceStatic);
    }

    getKeys(obj) {
        return Object.keys(obj);
    }

    showDevice() {
        this.deviceStatic.update();
        console.log(this.deviceStatic);
    }

    ngAfterViewInit(): void {

    }

}
