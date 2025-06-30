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

    const role = user.roleNom.toLowerCase(); // ✅ Utiliser roleNom au lieu de roleId
    const currentRoute = route.routeConfig?.path;

    console.log('🔐 Guard vérifie accès à', currentRoute, 'pour rôle', role);

    if (
      (currentRoute === 'admin-dashboard' || currentRoute === 'roles' || currentRoute === 'projets') &&
      role !== 'admin'
    ) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    if (
      currentRoute === 'chef-dashboard' &&
      role !== 'chef'
    ) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    // ✅ Autorisé
    return true;
  }
}
