import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NOTES } from '../notes-list/note';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((element) => {
    return element.id == this.id;
  });

  deleteNote(){
    if(this.note){
      NOTES.splice(NOTES.indexOf(this.note), 1);
      this.router.navigateByUrl('/notes/listeNote');
    }
  }
}
