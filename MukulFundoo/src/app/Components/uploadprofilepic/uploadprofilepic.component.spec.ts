import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadprofilepicComponent } from './uploadprofilepic.component';

describe('UploadprofilepicComponent', () => {
  let component: UploadprofilepicComponent;
  let fixture: ComponentFixture<UploadprofilepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadprofilepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadprofilepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
