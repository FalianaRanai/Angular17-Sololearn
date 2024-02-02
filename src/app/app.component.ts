import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isRed = false;
  name=""
  username="test@email.com"
  password="azerty"

  welcome() {
    alert('Welcome!');
  }

  change(){
    this.isRed = !this.isRed;
  }

  showName(){
    alert(this.name);
  }

}
