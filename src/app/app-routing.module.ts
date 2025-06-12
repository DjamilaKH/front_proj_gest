import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RoleComponent } from './components/role/role.component';
import { ProjetComponent } from './components/projet/projet.component';
import { CreerActiviteComponent } from './components/creer-activite/creer-activite.component';

const routes: Routes = [
  // app-routing.module.ts
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
// { path: 'header', component: HeaderComponent },
// { path: 'footer', component: FooterComponent },

{ path: 'roles', component: RoleComponent },
{ path: 'projets', component: ProjetComponent },
{ path: 'activites', component: CreerActiviteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
