import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuFormComponent } from './stu-form.component';

describe('StuFormComponent', () => {
  let component: StuFormComponent;
  let fixture: ComponentFixture<StuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
