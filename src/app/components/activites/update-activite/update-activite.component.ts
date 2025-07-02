import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiviteService } from '../../../services/activite.service';

@Component({
  selector: 'app-update-activite',
  templateUrl: './update-activite.component.html',
   styleUrls: ['./update-activite.component.scss'] 
})
export class UpdateActiviteComponent implements OnInit {
  activiteForm!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private activiteService: ActiviteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.activiteForm = this.fb.group({
      titre: ['', Validators.required],
      categorie: ['', Validators.required],
      delai: ['', Validators.required],
    });

    // Charger les données existantes
    this.activiteService.getActiviteById(this.id).subscribe((data) => {
      this.activiteForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.activiteForm.valid) {
      this.activiteService.updateActivite(this.id, this.activiteForm.value).subscribe({
        next: () => {
          alert('Activité mise à jour avec succès !');
          this.router.navigate(['/activites']);
        },
        error: (err) => {
          alert('Erreur lors de la mise à jour');
          console.error(err);
        },
      });
    }
  }
}
