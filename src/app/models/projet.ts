export interface Projet {
  id?: string;            // ou string obligatoire selon ton besoin
  titre: string;
  description?: string;
  direction?: string;
  budget?: number;
  dateDebut?: Date | string;
  dateFin?: Date | string;
  statut?: string;
  chefProjetId?: string;
}
