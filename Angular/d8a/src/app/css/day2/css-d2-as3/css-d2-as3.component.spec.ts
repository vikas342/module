import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD2As3Component } from './css-d2-as3.component';

describe('CssD2As3Component', () => {
  let component: CssD2As3Component;
  let fixture: ComponentFixture<CssD2As3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD2As3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD2As3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
