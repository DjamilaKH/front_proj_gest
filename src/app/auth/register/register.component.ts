import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NonNullableFormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup<{ 
    nom: FormControl<string>, 
    prenom: FormControl<string>,
    userName: FormControl<string>,
    email: FormControl<string>,
    tel: FormControl<string>,
    motDePasse: FormControl<string>,
    projetId: FormControl<string>,
    roleId: FormControl<string>
  }>;

  message: string = '';

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nom: this.fb.control('', Validators.required),
      prenom: this.fb.control('', Validators.required),
      userName: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      tel: this.fb.control('', Validators.required),
      motDePasse: this.fb.control('', Validators.required),
      projetId: this.fb.control('', Validators.required),
      roleId: this.fb.control('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const utilisateur: Utilisateur = this.registerForm.getRawValue();

    console.log('Formulaire soumis :', utilisateur);

    this.authService.signup(utilisateur).subscribe({
      next: () => {
        this.message = 'Inscription réussie !';
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.error('Erreur lors de l’inscription :', err);
        this.message = err.error.message || 'Erreur lors de l’inscription.';
      }
    });
  }
  goBack() {
  window.history.back();
}
}
