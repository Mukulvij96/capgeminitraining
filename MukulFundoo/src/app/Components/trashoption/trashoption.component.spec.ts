import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashoptionComponent } from './trashoption.component';
import { MatMenuModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TrashoptionComponent', () => {
  let component: TrashoptionComponent;
  let fixture: ComponentFixture<TrashoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashoptionComponent ],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatMenuModule],
        schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
