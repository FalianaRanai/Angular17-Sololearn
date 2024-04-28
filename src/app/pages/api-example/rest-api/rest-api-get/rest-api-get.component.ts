import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/users.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { closeModalButton } from 'src/app/utils/closeModalButton.utils';

@Component({
  selector: 'app-rest-api-get',
  templateUrl: './rest-api-get.component.html',
  styleUrl: './rest-api-get.component.css',
})
export class RestApiGetComponent {
  constructor(
    private service: UsersService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getListeUser();
  }

  apiUrl: string = 'http://localhost:3000';
  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: string = '';
  listeUser: User[] = [];
  isLoadingDelete: boolean = false;

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

  deleteUser = (id: number) => {
    this.isLoadingDelete = true;
    this.service.deleteUser(`${id}`).subscribe({
      next: (response: any) => {
        this.isLoadingDelete = false;
        closeModalButton(this.renderer);
        this.getListeUser();
      },
      error: (error) => {
        console.error(error.message);
        this.isError = true;
        this.errorMessage = error.message;
        this.isLoadingDelete = false;
      },
    });
  };

  goToAddUser = () => {
    this.router.navigateByUrl('/api-example/addUser');
  };

  goToUpdateUser = (id: number) => {
    this.router.navigateByUrl(`/api-example/updateUser/${id}`);
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
