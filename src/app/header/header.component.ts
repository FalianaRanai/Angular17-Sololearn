import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>
      {{ title }}
    </h1>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'My Notes';
}
