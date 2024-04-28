import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StructureFichierAppComponent } from '../pages/lessons/structure-fichier/structure-fichier-app/structure-fichier-app.component';
import { StructureFichierComponentsComponent } from '../pages/lessons/structure-fichier/structure-fichier-components/structure-fichier-components.component';
import { StructureFichierComposantComponent } from '../pages/lessons/structure-fichier/structure-fichier-composant/structure-fichier-composant.component';
import { StructureFichierInterfaceComponent } from '../pages/lessons/structure-fichier/structure-fichier-interface/structure-fichier-interface.component';
import { StructureFichierPagesComponent } from '../pages/lessons/structure-fichier/structure-fichier-pages/structure-fichier-pages.component';
import { StructureFichierRoutesComponent } from '../pages/lessons/structure-fichier/structure-fichier-routes/structure-fichier-routes.component';
import { StructureFichierServicesComponent } from '../pages/lessons/structure-fichier/structure-fichier-services/structure-fichier-services.component';
import { StructureFichierSrcComponent } from '../pages/lessons/structure-fichier/structure-fichier-src/structure-fichier-src.component';
import { StructureFichierComponent } from '../pages/lessons/structure-fichier/structure-fichier.component';

@NgModule({
  declarations: [
    StructureFichierComponent,
    StructureFichierSrcComponent,
    StructureFichierAppComponent,
    StructureFichierComposantComponent,
    StructureFichierComponentsComponent,
    StructureFichierPagesComponent,
    StructureFichierRoutesComponent,
    StructureFichierServicesComponent,
    StructureFichierInterfaceComponent,
  ],
  imports: [CommonModule],
  exports: [
    StructureFichierComponent,
    StructureFichierSrcComponent,
    StructureFichierAppComponent,
    StructureFichierComposantComponent,
    StructureFichierComponentsComponent,
    StructureFichierPagesComponent,
    StructureFichierRoutesComponent,
    StructureFichierServicesComponent,
    StructureFichierInterfaceComponent,
  ],
})
export class StructureFichierModule {}
