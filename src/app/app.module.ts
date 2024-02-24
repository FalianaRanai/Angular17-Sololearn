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
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { ApiExampleComponent } from './pages/api-example/api-example.component';
import { ComponentIntegrationComponent } from './pages/component-integration/component-integration.component';
import { EventsComponent } from './pages/events/events.component';
import { ForIfComponent } from './pages/for-if/for-if.component';
import { FormsModuleComponent } from './pages/forms-module/forms-module.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ReactiveFormModuleComponent } from './reactive-form-module/reactive-form-module.component';
import { RoutingComponent } from './routing/routing.component';
import { SetupComponent } from './setup/setup.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
