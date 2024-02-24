import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes/notes.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: LayoutComponent,
    children: [
      { path: '', title: 'Home Page', component: LessonsComponent },
      { path: 'home', title: 'Home Page', component: HomeComponent },
      {
        path: 'contacts',
        title: 'Contacts Page',
        component: ContactsComponent,
      },
    ],
  },
  {
    path: 'notes',
    title: 'Notes',
    component: NotesComponent,
    children: [
      { path: '', title: 'Liste Note', component: NotesComponent },
      { path: 'listeNote', title: 'Liste Note', component: NotesListComponent },
      { path: 'addNote', title: "Add Note", component: AddNoteComponent},
      { path: "note/:id", title: "Note Detail", component: NoteDetailComponent }
    ],
  },
  { path: '**', title: 'Page not found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
