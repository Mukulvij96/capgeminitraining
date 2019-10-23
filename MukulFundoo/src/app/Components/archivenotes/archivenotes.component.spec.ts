import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivenotesComponent } from './archivenotes.component';
import { MyMaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  
import { MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteService } from 'src/app/services/appservices/app-service.service';

describe('ArchivenotesComponent', () => {
  let component: ArchivenotesComponent;
  let fixture: ComponentFixture<ArchivenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivenotesComponent ],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers:[NoteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
