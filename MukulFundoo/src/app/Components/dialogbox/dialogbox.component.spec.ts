import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogboxComponent } from './dialogbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import {  MatDialog, MatDialogRef} from '@angular/material/dialog'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { MatDialogModule } from '@angular/material'
describe('DialogboxComponent', () => {
  let component: DialogboxComponent;
  let fixture: ComponentFixture<DialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogboxComponent,DisplayComponent ],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatDialogModule,MatDialog,MatDialogRef],
        providers:[DataserviceService,NoteService],
        schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
