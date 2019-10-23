import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelnotesdisplayComponent } from './labelnotesdisplay.component';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LabelnotesdisplayComponent', () => {
  let component: LabelnotesdisplayComponent;
  let fixture: ComponentFixture<LabelnotesdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelnotesdisplayComponent ],
      providers:[Router,DataserviceService],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatMenuModule,MatCardModule,RouterTestingModule],
        schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelnotesdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
