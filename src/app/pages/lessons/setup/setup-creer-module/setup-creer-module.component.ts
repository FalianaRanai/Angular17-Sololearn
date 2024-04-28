import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-creer-module',
  templateUrl: './setup-creer-module.component.html',
  styleUrl: './setup-creer-module.component.css',
})
export class SetupCreerModuleComponent {
  constructor() {}

  exempleModule = `
  import { CommonModule } from '@angular/common';
  import { NgModule } from '@angular/core';
  import { SetupComponentParentEnfantComponent } from './setup-component-parent-enfant/setup-component-parent-enfant.component';
  import { SetupCreerComponentComponent } from './setup-creer-component/setup-creer-component.component';
  import { SetupCreerModuleComponent } from './setup-creer-module/setup-creer-module.component';
  import { SetupCreerProjetComponent } from './setup-creer-projet/setup-creer-projet.component';
  import { SetupCreerServiceComponent } from './setup-creer-service/setup-creer-service.component';
  import { SetupExecuterApplicationComponent } from './setup-executer-application/setup-executer-application.component';
  import { SetupInstallerAngularComponent } from './setup-installer-angular/setup-installer-angular.component';
  import { SetupMiseEnPlaceRoutingComponent } from './setup-mise-en-place-routing/setup-mise-en-place-routing.component';
  
  @NgModule({
    declarations: [
      SetupInstallerAngularComponent,
      SetupCreerProjetComponent,
      SetupExecuterApplicationComponent,
      SetupMiseEnPlaceRoutingComponent,
      SetupComponentParentEnfantComponent,
      SetupCreerServiceComponent,
      SetupCreerComponentComponent,
      SetupCreerModuleComponent,
    ],
    imports: [CommonModule],
    exports: [
      SetupInstallerAngularComponent,
      SetupCreerProjetComponent,
      SetupExecuterApplicationComponent,
      SetupMiseEnPlaceRoutingComponent,
      SetupComponentParentEnfantComponent,
      SetupCreerServiceComponent,
      SetupCreerComponentComponent,
      SetupCreerModuleComponent,
    ],
  })
  export class SetupModule {}
  
  `;
}
