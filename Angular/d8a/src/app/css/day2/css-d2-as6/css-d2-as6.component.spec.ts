import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssD2As6Component } from './css-d2-as6.component';

describe('CssD2As6Component', () => {
  let component: CssD2As6Component;
  let fixture: ComponentFixture<CssD2As6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssD2As6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssD2As6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
