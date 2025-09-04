import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(private router: Router) {}

  logout(): void {
    // 🔑 Supprimer le token / session (exemple avec localStorage)
    localStorage.removeItem('token');

    // 🚪 Redirection vers la page de connexion
    this.router.navigate(['/signin']);
  }
}
