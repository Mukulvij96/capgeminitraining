import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyMaterialModule} from './material/material.module'
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/component.login';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppServiceService, NoteService } from './app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetComponent } from './Components/reset/reset.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotefieldComponent } from './Components/notefield/notefield.component';
import { IconbarComponent } from './Components/iconbar/iconbar.component';
import { IcontrayComponent } from './Components/icontray/icontray.component';
import { AuthGuard } from './auth.guard';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ColorPickerModule } from 'ngx-color-picker';
import { DisplayComponent } from './Components/display/display.component';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
import { TrashoptionComponent } from './Components/trashoption/trashoption.component';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { ArchiveoptionComponent } from './Components/archiveoption/archiveoption.component';
import { DialogboxComponent } from './Components/dialogbox/dialogbox.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
    NotefieldComponent,
    IconbarComponent,
    IcontrayComponent,
    DisplayComponent,
    TrashnotesComponent,
    TrashoptionComponent,
    ArchivenotesComponent,
    ArchiveoptionComponent,
    DialogboxComponent,
    
   
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    StorageServiceModule,
    ColorPickerModule,
    
  ],
  providers: [AppServiceService,NoteService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
