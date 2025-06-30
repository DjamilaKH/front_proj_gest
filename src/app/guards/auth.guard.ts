import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }

    // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    
    this.router.navigate(['/singin'], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}

