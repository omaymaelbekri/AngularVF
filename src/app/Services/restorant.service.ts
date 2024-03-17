import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RestorantDto} from "../Model/restorant-dto";


@Injectable({
  providedIn: 'root'
})
export class RestorantService {
  private apiUrl = 'http://localhost:8066/restorants'; // Assurez-vous d'ajuster l'URL en fonction de votre configuration backend

  constructor(private http: HttpClient) { }

  getAllRestorants(): Observable<RestorantDto[]> {
    return this.http.get<RestorantDto[]>(this.apiUrl);
  }

  getRestorantById(id: number): Observable<RestorantDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<RestorantDto>(url);
  }

  createRestorant(restorant: RestorantDto): Observable<RestorantDto> {
    return this.http.post<RestorantDto>(this.apiUrl, restorant);
  }

  updateRestorant(id: number, restorant: RestorantDto): Observable<RestorantDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<RestorantDto>(url, restorant);
  }

  deleteRestorant(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  findAllByIdville(id: number): Observable<RestorantDto[]> {
    const url = `${this.apiUrl}/restoByVille/${id}`;
    return this.http.get<RestorantDto[]>(url);
  }
}
