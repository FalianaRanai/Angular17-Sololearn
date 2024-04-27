import { Component } from '@angular/core';

@Component({
  selector: 'app-liaison-evenement-parenthese',
  templateUrl: './liaison-evenement-parenthese.component.html',
  styleUrl: './liaison-evenement-parenthese.component.css',
})
export class LiaisonEvenementParentheseComponent {
  constructor() {}

  codeBlockTypescript = `
    export class MonComposantComponent {
      ouvrirModal() {
        console.log('Modal ouverte !');
      }
    }
  `;

  codeBlockHTML = `
    <button (click)="ouvrirModal()">Ouvrir Modal</button>
  `;
}
