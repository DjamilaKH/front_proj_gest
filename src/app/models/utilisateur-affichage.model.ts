// Interface pour l'affichage dans les tableaux
export interface UtilisateurAffichage {
  id: string;
  nom: string;
  prenom: string;
  userName: string;
  email: string;
  tel: string;
  roleNom: string;
  projetNom?: string;
}

// Interface détaillée pour l’édition
export interface UtilisateurDetail {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  tel: string;
  userName: string;
  role: {
    id: string;
    nom: string;
  };
  projet: {
    id: string;
    titre: string;
  };
}
