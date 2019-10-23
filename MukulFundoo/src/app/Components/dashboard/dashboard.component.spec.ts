import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { NoteService, AppServiceService } from 'src/app/services/appservices/app-service.service';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { LabelserviceService } from 'src/app/services/labelservice/labelservice.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LabeldialogboxComponent } from '../labeldialogbox/labeldialogbox.component';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatDialogModule} from '@angular/material'
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,LabeldialogboxComponent],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatDialogModule, MatDialog, MatDialogRef],
        providers:[NoteService,DataserviceService,LabelserviceService,AppServiceService],
        schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
