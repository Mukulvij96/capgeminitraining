import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcontrayComponent } from './icontray.component';

describe('IcontrayComponent', () => {
  let component: IcontrayComponent;
  let fixture: ComponentFixture<IcontrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcontrayComponent ]
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
