import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// describe('SignupComponent', () => {
//   let component: SignupComponent;
//   let fixture: ComponentFixture<SignupComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [SignupComponent]
//     });
//     fixture = TestBed.createComponent(SignupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });


// });


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [SignupComponent],
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('invalid form fields', () => {
    expect(component.signup.valid).toBeFalsy();
  });

  it('Email fields empty', () => {
    expect(component.signup.valid).toBeFalsy();
  });

  it('Email fields empty', () => {
    expect(component.signup.valid).toBeFalsy();
  });

  it('Email fields pattern validations', () => {
    let ers: any = {};

    let email = component.signup.controls['email'];
    email.setValue('abcd');


    ers = email.errors || {};

    expect(ers['email']).toBeTruthy();
  });


  it('Email fields pattern validations passing', () => {
    let ers: any = {};

    let email = component.signup.controls['email'];
    email.setValue('abcd@gmail.com');


    ers = email.errors || {};

    expect(ers['email']).toEqual(undefined)
  });


  it('Email fields Required validations', () => {
    let ers: any = {};

    let email = component.signup.controls['email'];

    ers = email.errors || {};

    expect(ers['required']).toBeTruthy();
  });

  it('Password fields Required validations', () => {
    let ers: any = {};

    let password = component.signup.controls['password'];

    ers = password.errors || {};

    expect(ers['required']).toBeTruthy();
  });

  it('Password fields pattern validations', () => {
    let ers: any = {};

    let password = component.signup.controls['password'];
    password.setValue('abcd');


    ers = password.errors || {};

    expect(ers['pattern']).toBeTruthy();
  });



  it('Password fields pattern validations check', () => {
    let ers: any = {};

    let password = component.signup.controls['password'];
    password.setValue('abcVikas@01');


    ers = password.errors || {};

    expect(ers['pattern']).toEqual(undefined);
  });
});
