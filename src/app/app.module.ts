import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderExampleComponent } from './components/header-example/headerExample.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApiExampleComponent } from './pages/api-example/api-example.component';
import { SetupJsonServerComponent } from './pages/api-example/setup-json-server/setup-json-server.component';
import { ComponentIntegrationComponent } from './pages/lessons/component-integration/component-integration.component';
import { EventsComponent } from './pages/lessons/events/events.component';
import { ForIfComponent } from './pages/lessons/for-if/for-if.component';
import { FormsModuleComponent } from './pages/lessons/forms-module/forms-module.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { ReactiveFormModuleComponent } from './pages/lessons/reactive-form-module/reactive-form-module.component';
import { RoutingComponent } from './pages/lessons/routing/routing.component';
import { SetupComponentParentEnfantComponent } from './pages/lessons/setup/setup-component-parent-enfant/setup-component-parent-enfant.component';
import { SetupCreerComponentComponent } from './pages/lessons/setup/setup-creer-component/setup-creer-component.component';
import { SetupCreerProjetComponent } from './pages/lessons/setup/setup-creer-projet/setup-creer-projet.component';
import { SetupCreerServiceComponent } from './pages/lessons/setup/setup-creer-service/setup-creer-service.component';
import { SetupExecuterApplicationComponent } from './pages/lessons/setup/setup-executer-application/setup-executer-application.component';
import { SetupInstallerAngularComponent } from './pages/lessons/setup/setup-installer-angular/setup-installer-angular.component';
import { SetupMiseEnPlaceRoutingComponent } from './pages/lessons/setup/setup-mise-en-place-routing/setup-mise-en-place-routing.component';
import { SetupComponent } from './pages/lessons/setup/setup.component';
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
    SetupInstallerAngularComponent,
    SetupCreerProjetComponent,
    SetupExecuterApplicationComponent,
    SetupMiseEnPlaceRoutingComponent,
    SetupComponentParentEnfantComponent,
    SetupCreerServiceComponent,
    SetupCreerComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
