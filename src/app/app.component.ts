import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public appPages = [
        {title: 'Welcome', url: '/welcome', icon: 'home'},
    ];
    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    public environment = null;

    constructor() {
        this.environment = environment;
    }
}
