export interface VilleDTO {
  id: number;
  nom: string;
  regionId: number | null; // Utilisation de "null" car l'ID peut être nul
}

