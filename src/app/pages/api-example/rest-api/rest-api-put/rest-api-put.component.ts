import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-api-put',
  templateUrl: './rest-api-put.component.html',
  styleUrl: './rest-api-put.component.css',
})
export class RestApiPutComponent {
  constructor(private router: Router) {}

  goBack = () => {
    this.router.navigateByUrl('/api-example');
  };
}
