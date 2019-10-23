import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeldialogboxComponent } from './labeldialogbox.component';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { MatCardModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LabeldialogboxComponent', () => {
  let component: LabeldialogboxComponent;
  let fixture: ComponentFixture<LabeldialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeldialogboxComponent ],
      providers:[Router,DataserviceService],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatMenuModule,MatCardModule],
        schemas:[CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeldialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
