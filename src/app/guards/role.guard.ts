import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = JSON.parse(localStorage.getItem('utilisateur') || '{}');

    if (!user || !user.roleNom) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    const role = user.roleNom.toLowerCase(); // ex : 'admin' ou 'chef'
    const allowedRoles = route.data['roles'] as string[]; // 🔥 la clé attendue dans tes routes

    console.log('🔐 Guard vérifie accès à', route.routeConfig?.path, 'pour rôle', role, 'autorisé :', allowedRoles);

    if (allowedRoles && !allowedRoles.includes(role)) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }
}
