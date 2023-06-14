import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.registerform = this.fb.group({
      Uname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      Email: ['', [Validators.required, Validators.email]],

      Phone_No: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      Password: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  get Phone_No(){
    return this.registerform.get("Phone_No")
  }
  get Uname(){
    return this.registerform.get("Uname")
  }
  get email(){
    return this.registerform.get("Email")
  }
  get password(){
    return this.registerform.get("Password")
  }

  submit() {
    console.log(this.registerform.value);
    this.auth.register(this.registerform.value).subscribe(
      (x) => {
        console.log(x);
        console.log('user created');
        this.route.navigateByUrl('/login');
      },
      (Error)=>{
        console.log("error");

        alert("User alredy exist")
      }
    );
  }
}
