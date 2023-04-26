import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsD5As1Component } from './js-d5-as1.component';

describe('JsD5As1Component', () => {
  let component: JsD5As1Component;
  let fixture: ComponentFixture<JsD5As1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsD5As1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsD5As1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
