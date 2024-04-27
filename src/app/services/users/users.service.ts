import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { User } from 'src/app/interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000';

  getListeUser = (): Observable<User[]> => {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      delay(1000) // Simuler une latence de 1 secondes
    );

    return this.http.get<User[]>(`${this.apiUrl}/users`);
  };
}
