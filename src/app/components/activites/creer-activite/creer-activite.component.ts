import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiviteService } from '../../../services/activite.service';
import { Activite } from '../../../models/activite.model';
import { Router } from '@angular/router'; // <-- Importer le Router

@Component({
  selector: 'app-creer-activite',
  templateUrl: './creer-activite.component.html',
  styleUrls: ['./creer-activite.component.scss']
})
export class CreerActiviteComponent {
  activiteForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private activiteService: ActiviteService,
    private router: Router // <-- Injecter le Router
  ) {
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
          
          // ⬇ Redirection après succès
          this.router.navigate(['/activites']);
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
