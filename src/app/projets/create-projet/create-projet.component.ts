import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetService } from '../../services/projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.scss']
})
export class CreateProjetComponent implements OnInit {
  projetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projetService: ProjetService,
    private router: Router
  ) {
    this.projetForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      direction: [''],
      budget: [0, Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      statut: ['Planifié', Validators.required],
      chefProjetId: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.projetForm.valid) {
      this.projetService.create(this.projetForm.value).subscribe({
        next: () => {
          alert('Projet créé avec succès');
          this.router.navigate(['/projets']);
        },
        error: (err) => {
          console.error('Erreur création projet', err);
          alert('Erreur lors de la création du projet');
        }
      });
    }
  }
}
