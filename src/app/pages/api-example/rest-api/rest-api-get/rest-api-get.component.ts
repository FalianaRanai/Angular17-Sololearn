import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/users.interface';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-rest-api-get',
  templateUrl: './rest-api-get.component.html',
  styleUrl: './rest-api-get.component.css',
})
export class RestApiGetComponent {
  constructor(private service: UsersService) {}

  ngOnInit() {
    this.getListeUser();
  }

  apiUrl: string = 'http://localhost:3000';
  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: string = '';
  listeUser: User[] = [];

  getListeUser = () => {
    this.isLoading = true;
    this.service.getListeUser().subscribe({
      next: (response: any) => {
        this.listeUser = response;
        console.log(this.listeUser);
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error.message);
        this.isError = true;
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  };

  exempleInterface = `
    export interface User {
      id: number;
      nom: string;
      prenom: string;
      date_de_naissance: Date;
      sexe: string;
      email: string;
      password: string;
    }
  `;

  exempleSeriveGet = `
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { User } from 'src/app/interfaces/users.interface';

  @Injectable({
    providedIn: 'root',
  })
  export class UsersService {
    constructor(private http: HttpClient) {}

    apiUrl = 'http://localhost:3000';

    getListeUser = (): Observable<User[]> => {
        return this.http.get<User[]>(\`${this.apiUrl}/users\`);
      };
    }
  `;

  exempleAppelGet = `
    constructor(private service: UsersService) {}

    ngOnInit() {
      this.getListeUser();
    }

    apiUrl: string = 'http://localhost:3000';
    isLoading: boolean = false;
    listeUser: User[] = [];

    getListeUser = () => {
      this.isLoading = true;
      this.service.getListeUser().subscribe({
        next: (response: any) => {
          this.listeUser = response.data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        },
      });
    };
  `;

  exempleAffichageVue = `
      @if (isLoading){
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      } @else {
      <div class="row">
        @for (user of listeUser; track user.id) {
        <div class="col-lg-4 my-2">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">
                {{ user.id }}. {{ user.nom }} {{ user.prenom }}
              </h5>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span class="fw-bold">id: </span>{{ user.id }}
              </p>
              <p class="card-text">
                <span class="fw-bold">nom: </span>{{ user.nom }}
              </p>
              <p class="card-text">
                <span class="fw-bold">prenom: </span>{{ user.prenom }}
              </p>
              <p class="card-text">
                <span class="fw-bold">username: </span>{{ user.username }}
              </p>
              <p class="card-text">
                <span class="fw-bold">email: </span>{{ user.email }}
              </p>
              <p class="card-text">
                <span class="fw-bold">password: </span>{{ user.password }}
              </p>
              
            </div>
          </div>
        </div>
        }
      </div>
      }
  `;
}
