import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './Component/adminlogin/adminlogin.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import {NgxPaginationModule} from 'ngx-pagination'
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
