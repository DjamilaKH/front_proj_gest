import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private apiUrl = 'http://localhost:3000/api/projets';

  constructor(private http: HttpClient) {}

  create(projet: Projet): Observable<Projet> {
  const headers = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  });
  return this.http.post<Projet>(this.apiUrl, projet, { headers });
}

  getProjets(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
updateProjet(id: string, data: any) {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.put(`${this.apiUrl}/${id}`, data, { headers });
}

getProjetById(id: string) {
  const token = localStorage.getItem('token');  // Ou où tu stockes ton token
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

return this.http.get<Projet>(`${this.apiUrl}/${id}`, { headers });
}
deleteProjet(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}