import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UtilisateurDTO} from "../Model/utilisateur-dto";


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8222/api/utilisateurs'; // Assurez-vous d'ajuster l'URL en fonction de votre configuration backend

  constructor(private http: HttpClient) { }

  getAllUtilisateurs(): Observable<UtilisateurDTO[]> {
    return this.http.get<UtilisateurDTO[]>(this.apiUrl);
  }

  getUtilisateurById(id: number): Observable<UtilisateurDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UtilisateurDTO>(url);
  }

  createUtilisateur(utilisateur: UtilisateurDTO): Observable<UtilisateurDTO> {
    return this.http.post<UtilisateurDTO>(this.apiUrl, utilisateur);
  }

  updateUtilisateur(id: number, utilisateur: UtilisateurDTO): Observable<UtilisateurDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<UtilisateurDTO>(url, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
