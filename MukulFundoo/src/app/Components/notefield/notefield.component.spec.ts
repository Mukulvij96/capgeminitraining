import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotefieldComponent } from './notefield.component';

describe('NotefieldComponent', () => {
  let component: NotefieldComponent;
  let fixture: ComponentFixture<NotefieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotefieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
