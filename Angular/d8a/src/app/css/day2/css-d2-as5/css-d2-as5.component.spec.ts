import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD2As5Component } from './css-d2-as5.component';

describe('CssD2As5Component', () => {
  let component: CssD2As5Component;
  let fixture: ComponentFixture<CssD2As5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD2As5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD2As5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
