import { ComponentFixture, TestBed } from '@angular/core/testing';

import { As2Component } from './as2.component';

describe('As2Component', () => {
  let component: As2Component;
  let fixture: ComponentFixture<As2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ As2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(As2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
