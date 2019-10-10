import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveoptionComponent } from './archiveoption.component';

describe('ArchiveoptionComponent', () => {
  let component: ArchiveoptionComponent;
  let fixture: ComponentFixture<ArchiveoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveoptionComponent ]
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
