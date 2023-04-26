import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD2As4Component } from './css-d2-as4.component';

describe('CssD2As4Component', () => {
  let component: CssD2As4Component;
  let fixture: ComponentFixture<CssD2As4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD2As4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD2As4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
