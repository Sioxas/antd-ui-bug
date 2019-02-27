import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
})
export class DefaultLayoutComponent {

    isReverseArrow = false;
    width = 200;

    isCollapsed = false;

    constructor(private router:Router,) { }

}
