import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiviteService } from '../../services/activite.service';
import { Activite } from '../../models/activite.model';

@Component({
  selector: 'app-creer-activite',
  templateUrl: './creer-activite.component.html',
  styleUrls: ['./creer-activite.component.scss']
})
export class CreerActiviteComponent {
  activiteForm: FormGroup;       // <-- déclaration ici
  successMessage: string = '';   // <-- déclaration ici
  errorMessage: string = '';     // <-- déclaration ici

  constructor(private fb: FormBuilder, private activiteService: ActiviteService) {
    this.activiteForm = this.fb.group({
      titre: ['', Validators.required],
      categorie: [''],
      delai: [''],
      projetId: ['', Validators.required],
      responsableId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.activiteForm.valid) {
      const activite: Activite = this.activiteForm.value;
      this.activiteService.creerActivite(activite).subscribe({
        next: () => {
          this.successMessage = "Activité créée avec succès !";
          this.errorMessage = '';
          this.activiteForm.reset();
        },
        error: (err) => {
          this.errorMessage = "Erreur lors de la création de l'activité.";
          this.successMessage = '';
          console.error(err);
        }
      });
    }
  }
}
