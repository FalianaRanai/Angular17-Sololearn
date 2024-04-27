import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-accolade',
  templateUrl: './interpolation-accolade.component.html',
  styleUrl: './interpolation-accolade.component.css',
})
export class InterpolationAccoladeComponent {
  constructor() {}

  titreAccolade = `1. Interpolation avec les accolades {{}} :`;
  definitionAccolade = `Les accolades doubles ({{}})`;
  definitionAccoladeCodeTypescript = `
  export class MonComposantComponent {
    nom: string = 'John Doe';
  }
  `;
  definitionAccoladeCodeHTML = `
    <p>{{ nom }}</p>
  `;
}
