import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsD3As1Component } from './js-d3-as1.component';

describe('JsD3As1Component', () => {
  let component: JsD3As1Component;
  let fixture: ComponentFixture<JsD3As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsD3As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsD3As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
