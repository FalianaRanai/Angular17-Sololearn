import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-json-server',
  standalone: false,
  templateUrl: './setup-json-server.component.html',
  styleUrl: './setup-json-server.component.css',
})
export class SetupJsonServerComponent {
  constructor() {}

  jsonExample: string = `
  {
    "users": [
      {
        "id": 1,
        "nom": "Doe",
        "prenom": "John",
        "date_de_naissance": "1990-01-01",
        "sexe": "M",
        "email": "john.doe@example.com",
        "username": "johndoe",
        "password": "motdepasse123"
      },
      ...
    ]
  }`;
}
