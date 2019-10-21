import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeldialogboxComponent } from './labeldialogbox.component';

describe('LabeldialogboxComponent', () => {
  let component: LabeldialogboxComponent;
  let fixture: ComponentFixture<LabeldialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeldialogboxComponent ]
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
