import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css',
})
export class LessonsComponent {
  constructor(private router: Router) {}
}
