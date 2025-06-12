import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import { Projet } from 'src/app/models/projet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projets: Projet[] = [];
  projetForm: FormGroup;

  constructor(
    private projetService: ProjetService,
    private fb: FormBuilder
  ) {
    this.projetForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      direction: [''],
      budget: [''],
      dateDebut: [''],
      dateFin: [''],
      statut: [''],
      chefProjetId: ['']
    });
  }

  ngOnInit(): void {
    // Optionnel si liste disponible plus tard
  }

  onSubmit() {
    if (this.projetForm.invalid) return;

    this.projetService.create(this.projetForm.value).subscribe(() => {
      this.projetForm.reset();
      alert("Projet créé avec succès !");
    });
  }
}
