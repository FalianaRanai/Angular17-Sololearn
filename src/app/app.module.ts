import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNoteComponent } from './add-note/add-note.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderExampleComponent } from './header-example/headerExample.component';
import { MenuComponent } from './menu/menu.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes/notes.component';
import { ComponentIntegrationComponent } from './pages/component-integration/component-integration.component';
import { EventsComponent } from './pages/events/events.component';
import { ForIfComponent } from './pages/for-if/for-if.component';
import { FormsModuleComponent } from './pages/forms-module/forms-module.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { ReactiveFormModuleComponent } from './reactive-form-module/reactive-form-module.component';
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
    ReactiveFormModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
