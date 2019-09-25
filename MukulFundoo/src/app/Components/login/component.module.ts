import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './component-routing.module';
import { LoginComponent } from './component.login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
