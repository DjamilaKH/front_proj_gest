import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'http://localhost:3000/api/roles';

  constructor(private http: HttpClient) {}

  /** Créer un nouveau rôle */
  create(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role);
  }

  /** Récupérer tous les rôles */
  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }
}

