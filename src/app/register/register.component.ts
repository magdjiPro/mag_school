import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform !: FormGroup;
  invalidRPWD: boolean = false;


  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.registerform = this.fb.group({
      firstName:[
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ]
      ],
      lastName:[
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ]
      ],
      email:['', [Validators.required, Validators.email]],
      pwd:[ 
        '',
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
       ],
       rpwd:[''],
    });
  }

  //#region Getters
  get FirstName(): FormControl{
    return this.registerform.get('firstName') as FormControl;
  }
  get LastName(): FormControl{
    return this.registerform.get('lastName') as FormControl;
  }
  get Email(): FormControl{
    return this.registerform.get('email') as FormControl;
  }
  get PWD(): FormControl{
    return this.registerform.get('pwd') as FormControl;
  }
  get RPWD(): FormControl{
    return this.registerform.get('rpwd') as FormControl;
  }

  register(){}
  //#endregion
}
