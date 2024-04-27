import { AddNoteComponent } from '../pages/notes/add-note/add-note.component';
import { NoteDetailComponent } from '../pages/notes/note-detail/note-detail.component';
import { NotesListComponent } from '../pages/notes/notes-list/notes-list.component';
import { NotesComponent } from '../pages/notes/notes.component';

export const NOTES_ROUTES = [
  { path: '', title: 'Liste Note', component: NotesComponent },
  {
    path: 'listeNote',
    title: 'Liste Note',
    component: NotesListComponent,
  },
  { path: 'addNote', title: 'Add Note', component: AddNoteComponent },
  {
    path: 'note/:id',
    title: 'Note Detail',
    component: NoteDetailComponent,
  },
];
