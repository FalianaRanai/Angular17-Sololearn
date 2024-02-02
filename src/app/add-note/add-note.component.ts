import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NOTES, Note } from '../notes-list/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {

  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });


  addNote() {
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';
    
    
    let listeNote = NOTES.sort((a, b) => b.id - a.id);
    let newId:number = listeNote[0].id + 1;
    // console.log(newId)
    let newNote : Note = { id: newId, title: title, text: text };
    NOTES.push(newNote);
  }
}
