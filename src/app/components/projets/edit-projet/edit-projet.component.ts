import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.scss']
})
export class EditProjetComponent implements OnInit {
  form!: FormGroup;
  projetId!: string;

  constructor(
    private route: ActivatedRoute,
    private projetService: ProjetService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projetId = this.route.snapshot.paramMap.get('id')!;
    this.form = this.fb.group({
      titre: [''],
      description: [''],
      direction: [''],
      budget: [''],
      dateDebut: [''],
      dateFin: [''],
      statut: ['']
    });

    this.projetService.getProjetById(this.projetId).subscribe({
      next: (data) => this.form.patchValue(data),
      error: (err) => console.error('Erreur chargement projet :', err)
    });
  }

  onSubmit() {
    this.projetService.updateProjet(this.projetId, this.form.value).subscribe({
      next: () => this.router.navigate(['/admin-dashboard']),
      error: (err) => console.error('Erreur mise à jour projet :', err)
    });
  }
}
