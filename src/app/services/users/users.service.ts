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

  getUser(id: string) {
    return this.http.get(`${this.apiUrl}/user/${id}`).pipe(delay(1000));

    return this.http.get(`${this.apiUrl}/user/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user).pipe(delay(1000));

    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http
      .put<User>(`${this.apiUrl}/users/${id}`, user)
      .pipe(delay(1000));
  }

  deleteUser(id: string): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/users/${id}`)
      .pipe(delay(1000));

    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }
}
