import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-module',
  templateUrl: './reactive-form-module.component.html',
  styleUrl: './reactive-form-module.component.css',
})
export class ReactiveFormModuleComponent {
  newName = new FormControl('');

  newShowName() {
    alert(this.newName.value);
  }

  loginForm = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl(''),
  });

  login() {
    alert(
      this.loginForm.value.username + ' | ' + this.loginForm.value.password
    );
  }

  newLoginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  isSubmitted = false;

  newLogin() {
    this.isSubmitted = true;
    if (this.newLoginForm.valid) {
      alert(
        this.newLoginForm.value.username +
          ' | ' +
          this.newLoginForm.value.password
      );
    }
  }

  get newLoginFormControl() {
    // console.log(this.loginForm.controls);
    return this.newLoginForm.controls;
  }
}
