import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
  currentUrl:string = this.router.url;
  
}
