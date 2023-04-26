import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAs1Component } from './html-as1.component';

describe('HtmlAs1Component', () => {
  let component: HtmlAs1Component;
  let fixture: ComponentFixture<HtmlAs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAs1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
