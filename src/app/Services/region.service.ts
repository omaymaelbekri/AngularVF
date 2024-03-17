import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegionDTO} from "../Model/region-dto";


@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private apiUrl = 'http://localhost:8222/api/regions'; // Mettez ici l'URL de votre API REST

  constructor(private http: HttpClient) { }

  getAllRegions(): Observable<RegionDTO[]> {
    return this.http.get<RegionDTO[]>(this.apiUrl);
  }

  getRegionById(id: number): Observable<RegionDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<RegionDTO>(url);
  }

  createRegion(region: RegionDTO): Observable<RegionDTO> {
    return this.http.post<RegionDTO>(this.apiUrl, region);
  }

  updateRegion(id: number, region: RegionDTO): Observable<RegionDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<RegionDTO>(url, region);
  }

  deleteRegion(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

