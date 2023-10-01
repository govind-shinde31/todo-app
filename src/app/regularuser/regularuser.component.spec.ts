import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularuserComponent } from './regularuser.component';

describe('RegularuserComponent', () => {
  let component: RegularuserComponent;
  let fixture: ComponentFixture<RegularuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularuserComponent]
    });
    fixture = TestBed.createComponent(RegularuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
