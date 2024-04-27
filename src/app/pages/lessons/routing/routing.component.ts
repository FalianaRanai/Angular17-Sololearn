import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css',
})
export class RoutingComponent {
  constructor(private router: Router) {}

  navigateToContacts() {
    this.router.navigateByUrl('/contacts');
  }
}
