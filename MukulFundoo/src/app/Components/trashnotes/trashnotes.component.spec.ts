import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashnotesComponent } from './trashnotes.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { NoteService } from 'src/app/services/appservices/app-service.service';
import { TrashoptionComponent } from '../trashoption/trashoption.component';

describe('TrashnotesComponent', () => {
  let component: TrashnotesComponent;
  let fixture: ComponentFixture<TrashnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashnotesComponent,TrashoptionComponent ],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatMenuModule,MatCardModule],
        schemas:[CUSTOM_ELEMENTS_SCHEMA],
        providers:[DataserviceService,NoteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
