import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SetupJsonServerInstallerCreerFichierComponent } from '../pages/api-example/setup-json-server/setup-json-server-installer-creer-fichier/setup-json-server-installer-creer-fichier.component';
import { SetupJsonServerInstallerDemarrerServerComponent } from '../pages/api-example/setup-json-server/setup-json-server-installer-demarrer-server/setup-json-server-installer-demarrer-server.component';
import { SetupJsonServerInstallerJsonServerComponent } from '../pages/api-example/setup-json-server/setup-json-server-installer-json-server/setup-json-server-installer-json-server.component';
import { SetupJsonServerComponent } from '../pages/api-example/setup-json-server/setup-json-server.component';

@NgModule({
  declarations: [
    SetupJsonServerComponent,
    SetupJsonServerInstallerJsonServerComponent,
    SetupJsonServerInstallerCreerFichierComponent,
    SetupJsonServerInstallerDemarrerServerComponent,
  ],
  imports: [CommonModule],
  exports: [
    SetupJsonServerComponent,
    SetupJsonServerInstallerJsonServerComponent,
    SetupJsonServerInstallerCreerFichierComponent,
    SetupJsonServerInstallerDemarrerServerComponent,
  ],
})
export class SetupJsonServerModule {}
