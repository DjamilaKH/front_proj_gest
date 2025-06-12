
export interface Utilisateur {
  id?: string;             // optionnel pour la création
  nom: string;
  prenom: string;
  userName: string;
  email: string;
  tel: string;
  motDePasse: string;
  projetId: string;
  roleId: string;
}
