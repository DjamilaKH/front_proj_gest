export interface Activite {
  id?: string;
  titre: string;
  categorie?: string;
  delai?: Date | string;
  projetId: string;
  responsableId: string;
}
