import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacheService } from 'src/app/services/tache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-tache',
  templateUrl: './creer-tache.component.html',
  styleUrls: ['./creer-tache.component.scss']
})
export class CreerTacheComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private tacheService: TacheService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titre: ['', Validators.required],
      activiteId: ['', Validators.required],
      membreId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.tacheService.creerTache(this.form.value).subscribe({
        next: () => this.router.navigate(['/taches']),
        error: err => console.error('Erreur création tâche', err)
      });
    }
  }
}
