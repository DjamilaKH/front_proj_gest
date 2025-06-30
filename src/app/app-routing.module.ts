import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ChefDashboardComponent } from './components/chef-dashboard/chef-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

import { RoleComponent } from './components/role/role.component';
import { ListUtilisateursComponent } from './components/utilisateurs/list-utilisateurs/list-utilisateurs.component';
import { EditUtilisateurComponent } from './components/utilisateurs/edit-utilisateur/edit-utilisateur.component';

import { ListProjetsComponent } from './components/projets/list-projets/list-projets.component';
import { DetailProjetComponent } from './components/projets/detail-projet/detail-projet.component';
import { EditProjetComponent } from './components/projets/edit-projet/edit-projet.component';

import { CreerActiviteComponent } from './components/creer-activite/creer-activite.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { CreerTacheComponent } from './components/taches/creer-tache/creer-tache.component';
import { ListTacheComponent } from './components/taches/list-tache/list-tache.component';
import { UpdateTacheComponent } from './components/taches/update-tache/update-tache.component';
import { DeleteTacheComponent } from './components/taches/delete-tache/delete-tache.component';
import { RapportProjetsComponent } from './components/rapport-projets/rapport-projets.component';

const routes: Routes = [
  // 🌐 Pages publiques
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },

  // 👤 Authentification & utilisateurs
  {
    path: 'users/create',
    component: RegisterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'users',
    component: ListUtilisateursComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  { path: 'users/edit/:id', component: EditUtilisateurComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' } },

  // 🧑‍💼 Dashboards
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'chef-dashboard', component: ChefDashboardComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },

  // 📁 Projets
  {
    path: 'projets',
    component: ListProjetsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'projets/edit/:id',
    component: EditProjetComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  { path: 'detail-projet/:id', component: DetailProjetComponent, canActivate: [AuthGuard] },

  // 🧩 Activités
  { path: 'activites', component: CreerActiviteComponent, canActivate: [AuthGuard] },

{ path: 'taches/create', component: CreerTacheComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' } },
{ path: 'taches', component: ListTacheComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' } },
{ path: 'taches/update/:id', component: UpdateTacheComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' } },
{ path: 'taches/delete/:id', component: DeleteTacheComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' } },

 {
    path: 'rapports',
    component: RapportProjetsComponent,
    canActivate: [AuthGuard, RoleGuard], // si tu protèges par rôle
    data: { roles: ['admin'] } // optionnel
  },
  // 🔐 Gestion des rôles
  {
    path: 'roles',
    component: RoleComponent,
    canActivate: [AuthGuard, RoleGuard]
  },

  // 🚫 Unauthorized
  { path: 'unauthorized', component: UnauthorizedComponent },

  // ❌ Fallback 404
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
