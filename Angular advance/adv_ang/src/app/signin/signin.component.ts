import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signin!: FormGroup;

  validuser: boolean = false;

  userdata!: any[];

  constructor(private fb: FormBuilder, private dataserv: DataService,private router:Router) {}

  ngOnInit(): void {
    this.signin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
      ],
    });

    this.userdata = this.dataserv.data;
  }

  submit() {
    console.log(this.signin.value);

    console.warn(this.userdata);


    for (let x of this.userdata )
    {
      if (
        x.email == this.signin.value.email &&
        x.password == this.signin.value.password
      ) {

this.dataserv.loggedin_userdetails(x);

        this.router.navigateByUrl('/posts')
      } else {
        alert('Invalid Id or Password')
      }
    }
  }
}
