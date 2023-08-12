import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTodoComponent } from './complete-todo.component';

describe('CompleteTodoComponent', () => {
  let component: CompleteTodoComponent;
  let fixture: ComponentFixture<CompleteTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteTodoComponent]
    });
    fixture = TestBed.createComponent(CompleteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
