import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  isRed = false;
  switchClass = false;

  welcome() {
    // alert('Welcome!');
    const elementToClick = document.querySelector(
      '#welcomeModal'
    ) as HTMLElement;
    if (elementToClick) {
      elementToClick.click();
    }
  }

  change() {
    this.isRed = !this.isRed;
    this.switchClass = !this.switchClass;
  }
}
