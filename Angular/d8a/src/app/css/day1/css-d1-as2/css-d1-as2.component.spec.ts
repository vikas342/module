import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD1As2Component } from './css-d1-as2.component';

describe('CssD1As2Component', () => {
  let component: CssD1As2Component;
  let fixture: ComponentFixture<CssD1As2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD1As2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD1As2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
