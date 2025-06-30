import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UtilisateurAffichage,UtilisateurDetail  } from '../models/utilisateur-affichage.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:3000/api/utilisateurs';  // adapte l'URL à ton backend

  constructor(private http: HttpClient) {}

  getUtilisateurs(): Observable<UtilisateurAffichage[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.map(user => ({
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        userName: user.userName,
        email: user.email,
        tel: user.tel,
        roleNom: user.role?.nom || 'Non défini',
        projetNom: user.projet?.titre || 'Aucun'
      })))
    );
  }
   deleteUtilisateur(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
getUtilisateurById(id: string): Observable<UtilisateurDetail> {
  return this.http.get<UtilisateurDetail>(`${this.apiUrl}/${id}`);
}

updateUtilisateur(id: string, data: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, data);
}

}
