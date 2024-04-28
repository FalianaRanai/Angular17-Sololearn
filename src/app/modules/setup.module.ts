import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SetupComponentParentEnfantComponent } from '../pages/lessons/setup/setup-component-parent-enfant/setup-component-parent-enfant.component';
import { SetupCreerComponentComponent } from '../pages/lessons/setup/setup-creer-component/setup-creer-component.component';
import { SetupCreerModuleComponent } from '../pages/lessons/setup/setup-creer-module/setup-creer-module.component';
import { SetupCreerProjetComponent } from '../pages/lessons/setup/setup-creer-projet/setup-creer-projet.component';
import { SetupCreerServiceComponent } from '../pages/lessons/setup/setup-creer-service/setup-creer-service.component';
import { SetupExecuterApplicationComponent } from '../pages/lessons/setup/setup-executer-application/setup-executer-application.component';
import { SetupInstallerAngularComponent } from '../pages/lessons/setup/setup-installer-angular/setup-installer-angular.component';
import { SetupMiseEnPlaceRoutingComponent } from '../pages/lessons/setup/setup-mise-en-place-routing/setup-mise-en-place-routing.component';
import { SetupComponent } from '../pages/lessons/setup/setup.component';

@NgModule({
  declarations: [
    SetupComponent,
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
    SetupComponent,
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
