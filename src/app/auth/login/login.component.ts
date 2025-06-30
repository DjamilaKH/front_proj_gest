import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  erreurConnexion = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.signin(credentials).subscribe({
        next: (res) => {
          console.log('✅ Connexion réussie :', res);

          // Stockage local
          localStorage.setItem('token', res.token);

          localStorage.setItem('utilisateur', JSON.stringify(res.utilisateur));

          const roleNom = res.utilisateur?.roleNom?.toLowerCase();
          console.log('🎯 Rôle reçu :', roleNom);

          if (!roleNom) {
            console.warn('⚠️ Rôle non défini, redirection par défaut.');
            this.router.navigate(['/dashboard']);
            return;
          }

          // Petite pause pour éviter les erreurs de navigation
          setTimeout(() => {
            switch (roleNom) {
              case 'admin':
                console.log('🔁 Redirection vers /admin-dashboard');
                this.router.navigate(['/admin-dashboard']);
                break;
              case 'chef':
                console.log('🔁 Redirection vers /chef-dashboard');
                this.router.navigate(['/chef-dashboard']);
                break;
              default:
                console.log('🔁 Redirection vers /dashboard');
                this.router.navigate(['/dashboard']);
                break;
            }
          }, 100);
        },
        error: (err) => {
          this.erreurConnexion = 'Échec de connexion. Vérifiez vos identifiants.';
          console.error('❌ Erreur de connexion :', err);
        }
      });
    }
  }
}
