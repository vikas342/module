import { ComponentFixture, TestBed } from '@angular/core/testing';

import { As1Component } from './as1.component';

describe('As1Component', () => {
  let component: As1Component;
  let fixture: ComponentFixture<As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
