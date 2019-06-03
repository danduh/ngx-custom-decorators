import {Component} from '@angular/core';
import {timer} from '../../../../src/lib/method/timer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Ngx-Custom-Decorators';

    @timer()
    checkTimer() {
        console.log(this.title);
    }
}
