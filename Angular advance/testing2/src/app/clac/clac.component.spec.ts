import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClacComponent } from './clac.component';

describe('ClacComponent', () => {
  let component: ClacComponent;
  let fixture: ComponentFixture<ClacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should age 65 return 23725 day', () => {
    component.age=65;
    component.calculate();
    expect(component.result).toEqual(23725);
  });



  it('should age 0 return 0', () => {
    component.age=0;
    component.calculate();
    expect(component.result).toEqual(0);
  });



  it('should age 20 return 7300', () => {
    component.age=20;
    component.calculate();
    expect(component.result).toEqual(7300);
  });
  it('should age -1 return error', () => {
    component.age=-1;
    component.calculate();
    expect(component.result).toEqual(0);
  });
});
