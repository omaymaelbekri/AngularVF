export interface RecetteDTO {
  id: number;
  nom: string;
  description: string;
  image: string;
  utilisateurId: number | null; // Utilisation de "null" car l'ID peut être nul
  idville: number;
  createdAt: string; // Convertir la date en string pour correspondre à LocalDateTime
  likes: number;
}
