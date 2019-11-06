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
import { AppServiceService, NoteService } from './services/appservices/app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetComponent } from './Components/reset/reset.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotefieldComponent } from './Components/notefield/notefield.component';
import { IcontrayComponent } from './Components/icontray/icontray.component';
import { AuthGuard } from './authguard/auth.guard';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ColorPickerModule } from 'ngx-color-picker';
import { DisplayComponent } from './Components/display/display.component';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
import { TrashoptionComponent } from './Components/trashoption/trashoption.component';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { DialogboxComponent } from './Components/dialogbox/dialogbox.component';
import { UploadprofilepicComponent } from './Components/uploadprofilepic/uploadprofilepic.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SearchpipePipe } from '../app/pipe/searchpipe.pipe';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { LabeldialogboxComponent } from './Components/labeldialogbox/labeldialogbox.component';
import { LabelnotesdisplayComponent } from './Components/labelnotesdisplay/labelnotesdisplay.component';
import { DataserviceService } from './services/data services/dataservice.service';
import { NotesComponent } from './Components/notes/notes.component';
import { CollaboratorComponent } from './Components/collaborator/collaborator.component';
import { HttpserviceService } from './services/httpservice/httpservice.service';
import { LabelserviceService } from './services/labelservice/labelservice.service';
import { NotesService } from './services/noteservices/note-service.service';
import { CartComponent } from './Components/cart/cart.component';
import { RemindernotesComponent } from './Components/remindernotes/remindernotes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
    NotefieldComponent,
    IcontrayComponent,
    DisplayComponent,
    TrashnotesComponent,
    TrashoptionComponent,
    ArchivenotesComponent,
    
    DialogboxComponent,
    UploadprofilepicComponent,
    SearchpipePipe,
    SearchbarComponent,
    LabeldialogboxComponent,
    LabelnotesdisplayComponent,
    NotesComponent,
    CollaboratorComponent,
    CartComponent,
    RemindernotesComponent,
  ],
  entryComponents:[UploadprofilepicComponent,DialogboxComponent,LabeldialogboxComponent,CollaboratorComponent],
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
    ImageCropperModule
    
  ],
  providers: [AppServiceService,NoteService,AuthGuard,DataserviceService,HttpserviceService,LabelserviceService,NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
