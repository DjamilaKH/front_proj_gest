import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}
  utilisateur = JSON.parse(localStorage.getItem('utilisateur') || '{}');

  get isAdmin(): boolean {
    return this.utilisateur?.roleNom?.toLowerCase() === 'admin';
  }

  get isChef(): boolean {
    return this.utilisateur?.roleNom?.toLowerCase() === 'chef';
  }
  creerProjet() {
  this.router.navigate(['/projets/create']);
}
}
