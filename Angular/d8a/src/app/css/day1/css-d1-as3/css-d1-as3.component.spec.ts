import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD1As3Component } from './css-d1-as3.component';

describe('CssD1As3Component', () => {
  let component: CssD1As3Component;
  let fixture: ComponentFixture<CssD1As3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD1As3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD1As3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
