import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activite } from '../models/activite.model';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  private apiUrl = 'http://localhost:3000/api/activites';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getActivites(): Observable<Activite[]> {
    return this.http.get<Activite[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  creerActivite(activite: Activite): Observable<Activite> {
    return this.http.post<Activite>(this.apiUrl, activite, { headers: this.getHeaders() });
  }

  updateActivite(id: string, activite: Partial<Activite>): Observable<Activite> {
    return this.http.put<Activite>(`${this.apiUrl}/${id}`, activite, { headers: this.getHeaders() });
  }

getActiviteById(id: string): Observable<Activite> {
  return this.http.get<Activite>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
}
  deleteActivite(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
