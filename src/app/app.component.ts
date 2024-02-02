import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isRed = false;

  login() {
    alert('Welcome!');
  }

  change(){
    this.isRed = !this.isRed;
  }

}
