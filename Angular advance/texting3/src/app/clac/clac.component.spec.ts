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


  it('should gieve output of toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]', () => {

    component.x={ a: 1, b: 2 }
    component.toArray();
    expect(component.result).toEqual([["a", 1], ["b", 2]]);
  });



  it('should gieve output of toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]', () => {

    component.x={ a: 1, b: 2 }
    component.toArray();
    expect(component.result).toEqual([["a", 1], ["b", 2]]);
  });



  it('should gieve output of toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]', () => {

    component.x={ shrimp: 15, tots: 12 }
    component.toArray();
    expect(component.result).toEqual([["shrimp", 15], ["tots", 12]]);
  });


  it('should gieve output of toArray({}) ➞ []', () => {

    component.x={ }
    component.toArray();
    expect(component.result).toEqual([]);
  });
});
