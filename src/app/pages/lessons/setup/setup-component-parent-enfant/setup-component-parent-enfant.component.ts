import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-component-parent-enfant',
  templateUrl: './setup-component-parent-enfant.component.html',
  styleUrl: './setup-component-parent-enfant.component.css',
})
export class SetupComponentParentEnfantComponent {
  constructor() {}

  htmlTag = `<router-outlet></router-outlet>`;
}
