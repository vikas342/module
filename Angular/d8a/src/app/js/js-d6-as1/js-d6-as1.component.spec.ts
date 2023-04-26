import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsD6As1Component } from './js-d6-as1.component';

describe('JsD6As1Component', () => {
  let component: JsD6As1Component;
  let fixture: ComponentFixture<JsD6As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsD6As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsD6As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
