import { Component } from '@angular/core';

@Component({
  selector: 'app-responsable-dashboard',
  templateUrl: './responsable-dashboard.component.html',
  styleUrls: ['./responsable-dashboard.component.scss']
})
export class ResponsableDashboardComponent {
 nomUtilisateur = '';

  constructor() {}

  ngOnInit(): void {
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur')!);
    this.nomUtilisateur = utilisateur?.prenom + ' ' + utilisateur?.nom;
  }
}
