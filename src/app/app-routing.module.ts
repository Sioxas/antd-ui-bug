/*
 * File Created: Friday, 31st August 2018 4:20:32 pm
 * Author: zhsh
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './layout/default/default.component';

const routes: Routes = [
    {
        path:'',
        component:DefaultLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
