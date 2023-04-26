import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD2As1Component } from './css-d2-as1.component';

describe('CssD2As1Component', () => {
  let component: CssD2As1Component;
  let fixture: ComponentFixture<CssD2As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD2As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD2As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
