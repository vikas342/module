import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAs2Component } from './html-as2.component';

describe('HtmlAs2Component', () => {
  let component: HtmlAs2Component;
  let fixture: ComponentFixture<HtmlAs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAs2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
