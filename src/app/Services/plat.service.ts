import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PlatDTO} from "../Model/plat-dto";


@Injectable({
  providedIn: 'root'
})
export class PlatService {

  private baseUrl = 'http://localhost:8222/plats'; // L'URL de base de l'API

  constructor(private http: HttpClient) { }

  // Méthode pour créer un plat
  createPlat(platDTO: PlatDTO): Observable<PlatDTO> {
    return this.http.post<PlatDTO>(this.baseUrl, platDTO);
  }

  // Méthode pour récupérer tous les plats
  getAllPlats(): Observable<PlatDTO[]> {
    return this.http.get<PlatDTO[]>(this.baseUrl);
  }
  getAllPlatsResto(id: number): Observable<PlatDTO[]> {
    return this.http.get<PlatDTO[]>(`${this.baseUrl}/all/${id}`);
  }
  // Méthode pour récupérer un plat par son ID
  getPlatById(id: number): Observable<PlatDTO> {
    return this.http.get<PlatDTO>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour un plat
  updatePlat(id: number, platDTO: PlatDTO): Observable<PlatDTO> {
    return this.http.put<PlatDTO>(`${this.baseUrl}/${id}`, platDTO);
  }

  // Méthode pour supprimer un plat par son ID
  deletePlatById(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
