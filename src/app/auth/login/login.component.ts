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
          localStorage.setItem('token', res.token); // ou res.accessToken selon backend
          this.router.navigate(['/dashboard']); // ou redirection vers une autre page
        },
        error: (err) => {
          this.erreurConnexion = 'Échec de connexion. Vérifiez vos identifiants.';
          console.error('Erreur de connexion :', err);
        }
      });
    }
  }
}
