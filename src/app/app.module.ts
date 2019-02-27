import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultLayoutComponent } from './layout/default/default.component';


registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        DefaultLayoutComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        AppRoutingModule,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'zh-CN' },
        { provide: NZ_I18N, useValue: zh_CN },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
