import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstestingComponent } from './formstesting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// describe('FormstestingComponent', () => {
//   let component: FormstestingComponent;
//   let fixture: ComponentFixture<FormstestingComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ FormstestingComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(FormstestingComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });




// });


describe('FormstestingComponent', () => {
  let component: FormstestingComponent;
  let fixture: ComponentFixture<FormstestingComponent>;

  beforeEach(async () => {

    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule],
      declarations:[FormstestingComponent]

    });




    fixture = TestBed.createComponent(FormstestingComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid  when empty', () => {
    expect(component.loginform.valid).toBeFalsy();
  });

  it('Email field is empty', () => {
    let email=component.loginform.controls['email'];
    expect(email.valid).toBeFalsy();
  });


  it('Password field is empty', () => {
    let Password=component.loginform.controls['pass'];
    expect(Password.valid).toBeFalsy();
  });



  it('individual errror of email field (pattern)', () => {
    let ers:any={}
    let email=component.loginform.controls['email'];
    email.setValue("tesdfghjkt");

    ers=email.errors || {};

    expect(ers['pattern']).toBeTruthy();

  });



  it('individual errror of email field (required)', () => {
    let ers:any={}
    let email=component.loginform.controls['email'];

    ers=email.errors || {};

    expect(ers['required']).toBeTruthy();

  });




  it('individual errror of pass field (required)', () => {
    let ers:any={}
    let pass=component.loginform.controls['pass'];

    ers=pass.errors || {};

    expect(ers['required']).toBeTruthy();
    console.log(ers);

  });

//bug
  it('individual errror of email field (min)', () => {
    let ers:any={}
    let ps=component.loginform.controls['pass'];
    ps.setValue("asf");
    ers=ps.errors || {};
    expect(ers['maxlength']).toBeTruthy();
    console.log(ers);
  });

});


