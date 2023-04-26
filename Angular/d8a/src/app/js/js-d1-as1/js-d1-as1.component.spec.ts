import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsD1As1Component } from './js-d1-as1.component';

describe('JsD1As1Component', () => {
  let component: JsD1As1Component;
  let fixture: ComponentFixture<JsD1As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsD1As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsD1As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
