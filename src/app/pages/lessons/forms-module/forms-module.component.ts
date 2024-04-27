import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-module',
  templateUrl: './forms-module.component.html',
  styleUrl: './forms-module.component.css',
})
export class FormsModuleComponent {
  name = '';
  username = 'test@email.com';
  password = 'azerty';
  submitName = '';
  submitFormValidation = '';

  showName() {
    alert(this.submitName);
  }
  showNameFormValidation() {
    alert(this.submitFormValidation);
  }
}
