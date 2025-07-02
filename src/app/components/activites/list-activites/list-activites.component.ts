import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/services/activite.service';
import { Activite } from 'src/app/models/activite.model';

@Component({
  selector: 'app-list-activites',
  templateUrl: './list-activites.component.html',
  styleUrls: ['./list-activites.component.scss']
})
export class ListActivitesComponent implements OnInit {
  activites: Activite[] = [];

  constructor(private activiteService: ActiviteService) {}

  ngOnInit(): void {
    this.chargerActivites();
  }

  chargerActivites(): void {
    this.activiteService.getActivites().subscribe({
      next: data => this.activites = data,
      error: err => {
        console.error('❌ Erreur chargement activités :', err);
        alert('Erreur de chargement des activités');
      }
    });
  }

  supprimerActivite(id: string): void {
    if (confirm('Confirmer la suppression ?')) {
      this.activiteService.deleteActivite(id).subscribe(() => {
        this.activites = this.activites.filter(a => a.id !== id);
      });
    }
  }
}
