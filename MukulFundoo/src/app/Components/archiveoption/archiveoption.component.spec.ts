import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveoptionComponent } from './archiveoption.component';
import { AppServiceService } from 'src/app/services/appservices/app-service.service';
import { DataserviceService } from 'src/app/services/data services/dataservice.service';
import { MyMaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthGuard } from 'src/app/authguard/auth.guard';

describe('ArchiveoptionComponent', () => {
  let component: ArchiveoptionComponent;
  let fixture: ComponentFixture<ArchiveoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveoptionComponent ],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule,MatMenuModule],
        providers:[AppServiceService,DataserviceService,AuthGuard],
        schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
