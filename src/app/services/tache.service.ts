import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../models/tache.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private apiUrl = 'http://localhost:3000/api/taches';

  constructor(private http: HttpClient) {}

  creerTache(tache: Tache): Observable<Tache> {
    const headers = this.getAuthHeaders();
    return this.http.post<Tache>(this.apiUrl, tache, { headers });
  }

  getTaches(): Observable<Tache[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Tache[]>(this.apiUrl, { headers });
  }

  getTacheById(id: string): Observable<Tache> {
    const headers = this.getAuthHeaders();
    return this.http.get<Tache>(`${this.apiUrl}/${id}`, { headers });
  }

  deleteTache(id: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

  updateTache(id: string, tache: Partial<Tache>): Observable<Tache> {
    const headers = this.getAuthHeaders();
    return this.http.put<Tache>(`${this.apiUrl}/${id}`, tache, { headers });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
