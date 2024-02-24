import { Component } from '@angular/core';

@Component({
  selector: 'app-header-example',
  template: `
    <h1>
      {{ title }}
    </h1>
  `,
  styleUrls: ['./headerExample.component.css'],
})
export class HeaderExampleComponent {
  title = 'My Notes';
}
