import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {
  constructor(private router: Router) {}

  isRed = false;
  name = '';
  username = 'test@email.com';
  password = 'azerty';
  newName = new FormControl('');

  welcome() {
    alert('Welcome!');
  }

  change() {
    this.isRed = !this.isRed;
  }

  showName() {
    alert(this.name);
  }

  newShowName() {
    alert(this.newName.value);
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    alert(
      this.loginForm.value.username +
      ' | ' + 
      this.loginForm.value.password
    );
  };

  newLoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  newLogin() {
    alert(
      this.newLoginForm.value.username +
      ' | ' + 
      this.newLoginForm.value.password
    );
  };

  navigateToContacts(){
    this.router.navigateByUrl("/contacts")
  }
}
