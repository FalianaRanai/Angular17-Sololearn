import { Component } from '@angular/core';

@Component({
  selector: 'app-liaison-propriete-crochet',
  templateUrl: './liaison-propriete-crochet.component.html',
  styleUrl: './liaison-propriete-crochet.component.css',
})
export class LiaisonProprieteCrochetComponent {
  constructor() {}

  codeBlockTypescript = `
    export class MonComposantComponent {
      urlImage: string = 'chemin/vers/mon-image.jpg';
    }
  `;

  codeBlockHTML = `
    <img [src]="urlImage" alt="Mon image">
  `;
}
