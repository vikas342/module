import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsD4As1Component } from './js-d4-as1.component';

describe('JsD4As1Component', () => {
  let component: JsD4As1Component;
  let fixture: ComponentFixture<JsD4As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsD4As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsD4As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
