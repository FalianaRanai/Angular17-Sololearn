import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderExampleComponent } from './components/header-example/headerExample.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApiExampleComponent } from './pages/api-example/api-example.component';
import { RestApiGetComponent } from './pages/api-example/rest-api/rest-api-get/rest-api-get.component';
import { RestApiPostComponent } from './pages/api-example/rest-api/rest-api-post/rest-api-post.component';
import { RestApiComponent } from './pages/api-example/rest-api/rest-api.component';
import { SetupJsonServerInstallerCreerFichierComponent } from './pages/api-example/setup-json-server/setup-json-server-installer-creer-fichier/setup-json-server-installer-creer-fichier.component';
import { SetupJsonServerInstallerDemarrerServerComponent } from './pages/api-example/setup-json-server/setup-json-server-installer-demarrer-server/setup-json-server-installer-demarrer-server.component';
import { SetupJsonServerInstallerJsonServerComponent } from './pages/api-example/setup-json-server/setup-json-server-installer-json-server/setup-json-server-installer-json-server.component';
import { SetupJsonServerComponent } from './pages/api-example/setup-json-server/setup-json-server.component';
import { ComponentIntegrationComponent } from './pages/lessons/component-integration/component-integration.component';
import { EventsComponent } from './pages/lessons/events/events.component';
import { ForIfComponent } from './pages/lessons/for-if/for-if.component';
import { FormsModuleComponent } from './pages/lessons/forms-module/forms-module.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { ReactiveFormModuleComponent } from './pages/lessons/reactive-form-module/reactive-form-module.component';
import { RoutingComponent } from './pages/lessons/routing/routing.component';
import { SetupComponent } from './pages/lessons/setup/setup.component';
import { SetupModule } from './pages/lessons/setup/setup.module';
import { StructureFichierAppComponent } from './pages/lessons/structure-fichier/structure-fichier-app/structure-fichier-app.component';
import { StructureFichierComponentsComponent } from './pages/lessons/structure-fichier/structure-fichier-components/structure-fichier-components.component';
import { StructureFichierComposantComponent } from './pages/lessons/structure-fichier/structure-fichier-composant/structure-fichier-composant.component';
import { StructureFichierInterfaceComponent } from './pages/lessons/structure-fichier/structure-fichier-interface/structure-fichier-interface.component';
import { StructureFichierPagesComponent } from './pages/lessons/structure-fichier/structure-fichier-pages/structure-fichier-pages.component';
import { StructureFichierRoutesComponent } from './pages/lessons/structure-fichier/structure-fichier-routes/structure-fichier-routes.component';
import { StructureFichierServicesComponent } from './pages/lessons/structure-fichier/structure-fichier-services/structure-fichier-services.component';
import { StructureFichierSrcComponent } from './pages/lessons/structure-fichier/structure-fichier-src/structure-fichier-src.component';
import { StructureFichierComponent } from './pages/lessons/structure-fichier/structure-fichier.component';
import { InterpolationAccoladeComponent } from './pages/lessons/templating/interpolation-accolade/interpolation-accolade.component';
import { LiaisonEvenementParentheseComponent } from './pages/lessons/templating/liaison-evenement-parenthese/liaison-evenement-parenthese.component';
import { LiaisonProprieteCrochetComponent } from './pages/lessons/templating/liaison-propriete-crochet/liaison-propriete-crochet.component';
import { TemplatingComponent } from './pages/lessons/templating/templating.component';
import { AddNoteComponent } from './pages/notes/add-note/add-note.component';
import { NoteDetailComponent } from './pages/notes/note-detail/note-detail.component';
import { NotesListComponent } from './pages/notes/notes-list/notes-list.component';
import { NotesComponent } from './pages/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderExampleComponent,
    MenuComponent,
    NotesListComponent,
    AddNoteComponent,
    LessonsComponent,
    NotesComponent,
    NoteDetailComponent,
    HeaderComponent,
    ComponentIntegrationComponent,
    EventsComponent,
    SetupComponent,
    ForIfComponent,
    FormsModuleComponent,
    ReactiveFormModuleComponent,
    RoutingComponent,
    FooterComponent,
    ApiExampleComponent,
    SetupJsonServerComponent,
    TemplatingComponent,
    InterpolationAccoladeComponent,
    LiaisonProprieteCrochetComponent,
    LiaisonEvenementParentheseComponent,
    StructureFichierComponent,
    StructureFichierSrcComponent,
    StructureFichierAppComponent,
    StructureFichierComposantComponent,
    StructureFichierComponentsComponent,
    StructureFichierPagesComponent,
    StructureFichierRoutesComponent,
    StructureFichierServicesComponent,
    SetupJsonServerInstallerJsonServerComponent,
    SetupJsonServerInstallerCreerFichierComponent,
    SetupJsonServerInstallerDemarrerServerComponent,
    RestApiComponent,
    RestApiGetComponent,
    StructureFichierInterfaceComponent,
    RestApiPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SetupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
