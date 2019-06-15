import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {deviceBP, DeviceBPState, deviceDetect} from '../../../../src/lib/common';
import {debounce, deprecate, readonly, timer} from '../../../../src/lib/method';
import {tValidate, validateTypes} from '../../../../src/lib/params';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'Ngx-Custom-Decorators';

    @deviceDetect() public device;

    @deviceBP(true) public deviceObs: Observable<DeviceBPState>;

    @deviceBP() public deviceStatic: Observable<DeviceBPState>;


    @validateTypes
    summTwoNumbers(@tValidate('number') a, @tValidate('number') b) {
        console.log(this.title);
        return a + b;
    }


    @debounce(300)
    getSum() {
        try {
            console.log(this.summTwoNumbers(10, '5'));
        } catch (e) {
            console.error(e);
        }
    }

    showDevice() {
        console.log(this.device);
        console.log(this.deviceStatic);
    }

    ngOnInit(): void {
        this.deviceObs.subscribe((data) => {
            console.log(data);
        });
    }

}
