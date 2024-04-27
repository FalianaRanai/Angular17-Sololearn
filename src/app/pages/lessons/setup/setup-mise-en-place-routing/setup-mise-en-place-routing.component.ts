import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-mise-en-place-routing',
  templateUrl: './setup-mise-en-place-routing.component.html',
  styleUrl: './setup-mise-en-place-routing.component.css',
})
export class SetupMiseEnPlaceRoutingComponent {
  constructor() {}

  exampleRouting = `
    const routes: Routes = [

      { 
        path: '', 
        title: 
        'Titre de la page', 
        component: HomeComponent 
      },
      { 
        path: 'about', 
        component: AboutComponent, 
        children: [ 
          { 
            path: '', 
            title: 'Titre de la page', 
            component: HomeComponent 
          },
          ... 
        ] 
      },
      ...
    ];
  `;
}
