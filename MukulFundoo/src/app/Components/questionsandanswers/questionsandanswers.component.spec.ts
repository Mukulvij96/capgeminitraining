import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsandanswersComponent } from './questionsandanswers.component';

describe('QuestionsandanswersComponent', () => {
  let component: QuestionsandanswersComponent;
  let fixture: ComponentFixture<QuestionsandanswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsandanswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsandanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
