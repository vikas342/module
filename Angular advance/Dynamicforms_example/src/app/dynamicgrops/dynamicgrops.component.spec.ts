import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicgropsComponent } from './dynamicgrops.component';

describe('DynamicgropsComponent', () => {
  let component: DynamicgropsComponent;
  let fixture: ComponentFixture<DynamicgropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicgropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicgropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
