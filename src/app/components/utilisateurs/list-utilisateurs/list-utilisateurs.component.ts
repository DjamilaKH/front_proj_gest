import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurAffichage } from 'src/app/models/utilisateur-affichage.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.scss']
})
export class ListUtilisateursComponent { utilisateurs: UtilisateurAffichage[] = [];

  constructor(private utilisateurService: UtilisateurService, private router: Router) {}

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe({
      next: (data) => this.utilisateurs = data,
      error: (err) => console.error('Erreur chargement utilisateurs :', err)
    });
  }
editerUtilisateur(id: string): void {
    this.router.navigate(['/users/edit', id]); // redirection vers composant d'édition
  }

  supprimerUtilisateur(id: string): void {
    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
      this.utilisateurService.deleteUtilisateur(id).subscribe({
        next: () => {
          this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
        },
        error: (err) => console.error('Erreur suppression utilisateur :', err)
      });
    }
  }
}
