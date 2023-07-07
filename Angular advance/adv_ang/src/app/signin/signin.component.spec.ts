import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// describe('SigninComponent', () => {
//   let component: SigninComponent;
//   let fixture: ComponentFixture<SigninComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [SigninComponent]
//     });
//     fixture = TestBed.createComponent(SigninComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [SigninComponent],
    });
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('invalid form fields', () => {
    expect(component.signin.valid).toBeFalsy();
  });

  it('Email fields empty', () => {
    expect(component.signin.valid).toBeFalsy();
  });

  it('Email fields empty', () => {
    expect(component.signin.valid).toBeFalsy();
  });

  it('Email fields pattern validations', () => {
    let ers: any = {};

    let email = component.signin.controls['email'];
    email.setValue('abcd');


    ers = email.errors || {};

    expect(ers['email']).toBeTruthy();
  });


  it('Email fields pattern validations passing', () => {
    let ers: any = {};

    let email = component.signin.controls['email'];
    email.setValue('abcd@gmail.com');


    ers = email.errors || {};

    expect(ers['email']).toEqual(undefined)
  });


  it('Email fields Required validations', () => {
    let ers: any = {};

    let email = component.signin.controls['email'];

    ers = email.errors || {};

    expect(ers['required']).toBeTruthy();
  });

  it('Password fields Required validations', () => {
    let ers: any = {};

    let password = component.signin.controls['password'];

    ers = password.errors || {};

    expect(ers['required']).toBeTruthy();
  });

  it('Password fields pattern validations', () => {
    let ers: any = {};

    let password = component.signin.controls['password'];
    password.setValue('abcd');


    ers = password.errors || {};

    expect(ers['pattern']).toBeTruthy();
  });



  it('Password fields pattern validations check', () => {
    let ers: any = {};

    let password = component.signin.controls['password'];
    password.setValue('abcVikas@01');


    ers = password.errors || {};

    expect(ers['pattern']).toEqual(undefined);
  });
});
