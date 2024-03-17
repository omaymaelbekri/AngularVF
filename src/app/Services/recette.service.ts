import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RecetteDTO} from "../Model/recette-dto";


@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private readonly baseUrl = 'http://localhost:8222/api/recettes'; // Mettez votre URL de base ici

  constructor(private http: HttpClient) { }

  createRecette(recette: RecetteDTO): Observable<RecetteDTO> {
    return this.http.post<RecetteDTO>(this.baseUrl, recette);
  }

  getAllRecettes(): Observable<RecetteDTO[]> {
    return this.http.get<RecetteDTO[]>(this.baseUrl);
  }

  getRecetteById(id: number): Observable<RecetteDTO> {
    return this.http.get<RecetteDTO>(`${this.baseUrl}/${id}`);
  }

  updateRecette(id: number, recette: RecetteDTO): Observable<RecetteDTO> {
    return this.http.put<RecetteDTO>(`${this.baseUrl}/${id}`, recette);
  }

  deleteRecette(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

