import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD2As2Component } from './css-d2-as2.component';

describe('CssD2As2Component', () => {
  let component: CssD2As2Component;
  let fixture: ComponentFixture<CssD2As2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD2As2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD2As2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
