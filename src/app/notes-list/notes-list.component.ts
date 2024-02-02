import { Component } from '@angular/core';
import { NOTES } from './note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  listeNote = NOTES;
  show(title:String){
    alert(title)
  }
}
