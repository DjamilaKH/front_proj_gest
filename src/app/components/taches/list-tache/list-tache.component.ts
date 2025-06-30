import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/models/tache.model';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.scss']
})
export class ListTacheComponent implements OnInit {
  taches: Tache[] = [];

  constructor(private tacheService: TacheService) {}

  ngOnInit(): void {
    this.tacheService.getTaches().subscribe({
      next: (data) => this.taches = data,
      error: err => console.error('Erreur chargement tâches', err)
    });
  }
   loadTaches(): void {
    this.tacheService.getTaches().subscribe({
      next: (data) => this.taches = data,
      error: (err) => console.error(err)
    });
  }
supprimerTache(id?: string): void {
  if (!id) {
    alert('ID de la tâche invalide');
    return;
  }
  if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
    this.tacheService.deleteTache(id).subscribe({
      next: () => {
        alert('Tâche supprimée avec succès');
        this.loadTaches();
      },
      error: (err) => {
        console.error('Erreur lors de la suppression :', err);
        alert('Erreur lors de la suppression de la tâche');
      }
    });
  }
}}
