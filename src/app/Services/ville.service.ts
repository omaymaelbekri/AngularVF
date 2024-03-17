import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {VilleDTO} from "../Model/ville-dto";
import {RestorantDto} from "../Model/restorant-dto";
import {RecetteDTO} from "../Model/recette-dto";


@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private apiUrl = 'http://localhost:8222/api/villes'; // Assurez-vous d'ajuster l'URL en fonction de votre configuration backend

  constructor(private http: HttpClient) { }

  getAllVilles(): Observable<VilleDTO[]> {
    return this.http.get<VilleDTO[]>(this.apiUrl);
  }

  getVilleById(id: number): Observable<VilleDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<VilleDTO>(url);
  }

  createVille(ville: VilleDTO): Observable<VilleDTO> {
    return this.http.post<VilleDTO>(this.apiUrl, ville);
  }

  updateVille(id: number, ville: VilleDTO): Observable<VilleDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<VilleDTO>(url, ville);
  }

  deleteVille(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  findAllRestorantByIdville(id: number): Observable<RestorantDto[]> {
    const url = `${this.apiUrl}/restorant/${id}`;
    return this.http.get<RestorantDto[]>(url);
  }

  findAllRecetteByIdville(id: number): Observable<RecetteDTO[]> {
    const url = `${this.apiUrl}/recette/${id}`;
    return this.http.get<RecetteDTO[]>(url);
  }
}

