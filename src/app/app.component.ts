import { Component, OnInit } from '@angular/core';

import { NzIconService } from 'ng-zorro-antd';
import { ApartmentOutline } from '@ant-design/icons-angular/icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private iconService: NzIconService,
    ) {
        // Import what you need.
        this.iconService.addIcon(ApartmentOutline);
    }
    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
    }
}
