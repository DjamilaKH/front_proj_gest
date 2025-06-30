import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-dashboard',
  templateUrl: './chef-dashboard.component.html',
  styleUrls: ['./chef-dashboard.component.scss']
})
export class ChefDashboardComponent implements OnInit {

  nomUtilisateur = '';

  constructor() {}

  ngOnInit(): void {
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur')!);
    this.nomUtilisateur = utilisateur?.prenom + ' ' + utilisateur?.nom;
  }
}
