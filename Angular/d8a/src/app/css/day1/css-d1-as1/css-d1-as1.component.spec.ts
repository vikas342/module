import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD1As1Component } from './css-d1-as1.component';

describe('CssD1As1Component', () => {
  let component: CssD1As1Component;
  let fixture: ComponentFixture<CssD1As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD1As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD1As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
