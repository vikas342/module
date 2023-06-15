import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisingComponent } from './lising.component';

describe('LisingComponent', () => {
  let component: LisingComponent;
  let fixture: ComponentFixture<LisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
