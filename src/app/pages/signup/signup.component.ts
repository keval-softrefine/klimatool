import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent {

  signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    businessEmail: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    taxNumber: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    jobTitle: new FormControl(''),
    organizationsType: new FormControl('', Validators.required),
    isAgree: new FormControl(false, Validators.required),
  })

  organizations = [
    { name: 'Organizations 1'},
    { name: 'Organizations 2'},
    { name: 'Organizations 3'},
    { name: 'Organizations 4'},    
  ];


  getOrganizations(event: any) {
    console.log(event)
    this.signUpForm.get('organizationsType')?.setValue(event.value.name)
  }

  getFormValue(): void {
    console.log(this.signUpForm.value)
  }
}
