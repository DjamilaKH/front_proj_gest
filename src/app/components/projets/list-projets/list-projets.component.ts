import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-list-projets',
  templateUrl: './list-projets.component.html',
  styleUrls: ['./list-projets.component.scss']
})
export class ListProjetsComponent implements OnInit {
  projets: any[] = [];

  constructor(private projetService: ProjetService) {}

  ngOnInit(): void {
    this.projetService.getProjets().subscribe({
      next: (data) => this.projets = data,
      error: (err) => console.error('Erreur chargement projets :', err)
    });
  }
  supprimerProjet(id: any) {
    if (confirm('Voulez-vous vraiment supprimer ce projet ?')) {
      this.projetService.deleteProjet(id).subscribe({
        next: () => {
          this.projets = this.projets.filter(p => p.id !== id);
          alert('Projet supprimé avec succès !');
        },
        error: (err) => console.error('Erreur suppression projet :', err)
      });
    }
  }
}
