import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NOTES, Note } from '../pages/notes-list/note';

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
    
    let listeNote = [];
    let newId:number = 0;
    if(NOTES.length>0){
      listeNote = NOTES.sort((a, b) => b.id - a.id);
      newId = listeNote[0].id; 
    }
    
    // console.log(newId)
    newId++;
    let newNote : Note = { id: newId, title: title, text: text };
    NOTES.push(newNote);
  }
}
