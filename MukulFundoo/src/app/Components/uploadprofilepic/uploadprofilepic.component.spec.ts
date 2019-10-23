import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadprofilepicComponent } from './uploadprofilepic.component';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef} from '@angular/material/dialog'
import { MatDialogModule } from '@angular/material'
describe('UploadprofilepicComponent', () => {
  let component: UploadprofilepicComponent;
  let fixture: ComponentFixture<UploadprofilepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadprofilepicComponent],
      providers:[NoteService,DataserviceService],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatMenuModule,MatDialogModule, MatDialog, MatDialogRef],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadprofilepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
