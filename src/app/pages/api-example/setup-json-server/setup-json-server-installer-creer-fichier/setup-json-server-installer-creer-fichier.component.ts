import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-json-server-installer-creer-fichier',
  templateUrl: './setup-json-server-installer-creer-fichier.component.html',
  styleUrl: './setup-json-server-installer-creer-fichier.component.css',
})
export class SetupJsonServerInstallerCreerFichierComponent {
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
