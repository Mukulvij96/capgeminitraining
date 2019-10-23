import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcontrayComponent } from './icontray.component';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { LabelserviceService } from 'src/app/services/labelservice/labelservice.service';

describe('IcontrayComponent', () => {
  let component: IcontrayComponent;
  let fixture: ComponentFixture<IcontrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcontrayComponent ],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatMenuModule],
        schemas:[CUSTOM_ELEMENTS_SCHEMA],
        providers:[NoteService,LabelserviceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcontrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
