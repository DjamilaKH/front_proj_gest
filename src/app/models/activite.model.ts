export interface Activite {
  id?: string;
  titre: string;
  categorie: string;
  delai: Date;
  projet?: {
    id: string;
    titre: string;
  };
  responsable?: {
    id: string;
    nom: string;
    prenom: string;
  };
}

