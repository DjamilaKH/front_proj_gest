import { Component, Input, OnInit } from '@angular/core';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/models/tache.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.scss']
})
export class UpdateTacheComponent implements OnInit {
  @Input() tacheModifiee: Tache | null = null;

  constructor(
    private tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ID reçu depuis l'URL :", id);

    if (id) {
      this.tacheService.getTacheById(id).subscribe({
        next: (data: Tache) => {
          console.log("Tâche chargée :", data);
          this.tacheModifiee = data;
        },
        error: (err: any) => {
          console.error("Erreur lors du chargement de la tâche :", err);
        }
      });
    }
  }

  enregistrerModification(): void {
    if (this.tacheModifiee?.id) {
      this.tacheService.updateTache(this.tacheModifiee.id, this.tacheModifiee).subscribe({
        next: () => {
          alert('Tâche modifiée avec succès');
          this.router.navigate(['/taches']); // Exemple : redirection vers liste des tâches
          this.tacheModifiee = null;
        },
        error: (err: any) => {
          console.error("Erreur lors de la modification :", err);
          alert("Erreur lors de la modification de la tâche");
        }
      });
    }
  }

  annulerModification(): void {
    this.router.navigate(['/taches']); // Exemple : redirection si annulation
  }
}
