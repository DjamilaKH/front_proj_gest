import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import {  UtilisateurDetail } from 'src/app/models/utilisateur-affichage.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.scss']
})
export class EditUtilisateurComponent implements OnInit {
  utilisateurForm!: FormGroup;
  utilisateurId!: string;

  constructor(
    private route: ActivatedRoute,
    private utilisateurService: UtilisateurService,
    private fb: FormBuilder,
    private router: Router
  ) {}

ngOnInit(): void {
  this.utilisateurId = this.route.snapshot.params['id'];

  this.utilisateurService.getUtilisateurById(this.utilisateurId).subscribe({
  next: (data: UtilisateurDetail) => {
    console.log('DATA REÇUE 🔍', data); 

    this.utilisateurForm = this.fb.group({
      nom: [data.nom, Validators.required],
      prenom: [data.prenom, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      tel: [data.tel, Validators.required],
      roleId: [data.role ? data.role.id : '', Validators.required],
      projetId: [data.projet ? data.projet.id : '', Validators.required]
    });
  },
  error: (err) => console.error('Erreur chargement utilisateur :', err)
});
;}

  onSubmit(): void {
    if (this.utilisateurForm.valid) {
      this.utilisateurService.updateUtilisateur(this.utilisateurId, this.utilisateurForm.value).subscribe({
        next: () => this.router.navigate(['/users']),
        error: (err) => console.error('Erreur mise à jour :', err)
      });
    }
  }
}
