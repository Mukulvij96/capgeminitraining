import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashoptionComponent } from './trashoption.component';

describe('TrashoptionComponent', () => {
  let component: TrashoptionComponent;
  let fixture: ComponentFixture<TrashoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashoptionComponent ]
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
