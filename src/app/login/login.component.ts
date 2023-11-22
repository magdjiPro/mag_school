import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform !: FormGroup;

  constructor(private fb: FormBuilder){}
  ngOnInit(): void { 
    this.loginform = this.fb.group({
      email : ['', [ Validators.required, Validators.email ] ],
      pwd : [
        '',
        [
          Validators.required, 
          Validators.minLength(6), 
          Validators.maxLength(15)
        ]
      ]
    })
  }

  login(){}

  // #Getters
  get Email() : FormControl {
    return this.loginform.get('email') as FormControl;
  }
  get PWD() : FormControl {
    return this.loginform.get('pwd') as FormControl;
  }


}

