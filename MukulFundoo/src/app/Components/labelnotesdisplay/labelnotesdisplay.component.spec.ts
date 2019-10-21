import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelnotesdisplayComponent } from './labelnotesdisplay.component';

describe('LabelnotesdisplayComponent', () => {
  let component: LabelnotesdisplayComponent;
  let fixture: ComponentFixture<LabelnotesdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelnotesdisplayComponent ]
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
