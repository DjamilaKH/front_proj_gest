import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RoleComponent } from './components/role/role.component';
import { ProjetComponent } from './components/projets/list-projets/projet/projet.component';
import { CreerActiviteComponent } from './components/activites/creer-activite/creer-activite.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ChefDashboardComponent } from './components/chef-dashboard/chef-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ListUtilisateursComponent } from './components/utilisateurs/list-utilisateurs/list-utilisateurs.component';
import { EditUtilisateurComponent } from './components/utilisateurs/edit-utilisateur/edit-utilisateur.component';
import { CreateUtilisateurComponent } from './components/utilisateurs/create-utilisateur/create-utilisateur.component';
import { ListProjetsComponent } from './components/projets/list-projets/list-projets.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DetailProjetComponent } from './components/projets/detail-projet/detail-projet.component';
import { EditProjetComponent } from './components/projets/edit-projet/edit-projet.component';
import { CreerTacheComponent } from './components/taches/creer-tache/creer-tache.component';
import { ListTacheComponent } from './components/taches/list-tache/list-tache.component';
import { UpdateTacheComponent } from './components/taches/update-tache/update-tache.component';
import { DeleteTacheComponent } from './components/taches/delete-tache/delete-tache.component';
import { RapportProjetsComponent } from './components/rapport-projets/rapport-projets.component';
import { ListActivitesComponent } from './components/activites/list-activites/list-activites.component';
import { UpdateActiviteComponent } from './components/activites/update-activite/update-activite.component';
import { DeleteActiviteComponent } from './components/activites/delete-activite/delete-activite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RoleComponent,
    ProjetComponent,
    CreerActiviteComponent,
    AdminDashboardComponent,
    ChefDashboardComponent,
    UserDashboardComponent,
    UnauthorizedComponent,
    ListUtilisateursComponent,
    EditUtilisateurComponent,
    CreateUtilisateurComponent,
    ListProjetsComponent,
    DetailProjetComponent,
    EditProjetComponent,
    CreerTacheComponent,
    ListTacheComponent,
    UpdateTacheComponent,
    DeleteTacheComponent,
    RapportProjetsComponent,
    ListActivitesComponent,
    UpdateActiviteComponent,
    DeleteActiviteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
