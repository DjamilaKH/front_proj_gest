import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // à adapter si besoin

  constructor(private http: HttpClient) {}

  signup(utilisateur: Utilisateur): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, utilisateur);
  }

  signin(credentials: { email: string; motDePasse: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, credentials);
  }
}
