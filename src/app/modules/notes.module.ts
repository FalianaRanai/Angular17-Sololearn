import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AddNoteComponent } from '../pages/notes/add-note/add-note.component';
import { NoteDetailComponent } from '../pages/notes/note-detail/note-detail.component';
import { NotesListComponent } from '../pages/notes/notes-list/notes-list.component';
import { NotesComponent } from '../pages/notes/notes.component';

@NgModule({
  declarations: [
    AddNoteComponent,
    NotesListComponent,
    NotesComponent,
    NoteDetailComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [
    AddNoteComponent,
    NotesListComponent,
    NotesComponent,
    NoteDetailComponent,
  ],
})
export class NotesModule {}
