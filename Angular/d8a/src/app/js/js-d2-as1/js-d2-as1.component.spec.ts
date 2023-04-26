import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsD2As1Component } from './js-d2-as1.component';

describe('JsD2As1Component', () => {
  let component: JsD2As1Component;
  let fixture: ComponentFixture<JsD2As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsD2As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsD2As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
