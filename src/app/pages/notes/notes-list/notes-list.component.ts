import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NOTES } from './note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {

constructor(private router: Router) {}

  listeNote = NOTES;
  show(title:String){
    alert(title)
  }
}
