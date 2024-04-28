import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApiExampleComponent } from './pages/api-example/api-example.component';
import { ContactsComponent } from './pages/lessons/contacts/contacts.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { NotesComponent } from './pages/notes/notes.component';
import { API_EXAMPLE_ROUTES } from './routes/api-example.routes';
import { NOTES_ROUTES } from './routes/notes.routes';

const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: LayoutComponent,
    children: [
      { path: '', title: 'Home Page', component: LessonsComponent },
      {
        path: 'home',
        title: 'Home Page',
        component: LessonsComponent,
        children: [
          {
            path: 'contacts',
            title: 'Contacts Page',
            component: ContactsComponent,
          },
          {
            path: 'home2',
            title: 'Home 2',
            component: HomeComponent,
          },
        ],
      },
      {
        path: 'notes',
        title: 'Notes',
        component: NotesComponent,
        children: NOTES_ROUTES,
      },
      {
        path: 'api-example',
        title: 'Api Example',
        component: ApiExampleComponent,
        children: API_EXAMPLE_ROUTES,
      },
    ],
  },
  { path: '**', title: 'Page not found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
