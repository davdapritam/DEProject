import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm!:FormGroup

   ngOnInit(): void {

    this.signupForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'mobileNo': new FormControl('+91', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl('', Validators.required),
      'age': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'aadharcardNo': new FormControl('', Validators.required),
      'panNo': new FormControl(''),
      'password': new FormControl('')
    })
  }
}
