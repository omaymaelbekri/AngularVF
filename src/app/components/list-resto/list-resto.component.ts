import { Component } from '@angular/core';
import {RestorantDto} from "../../Model/restorant-dto";
import {RecetteService} from "../../Services/recette.service";
import {RestorantService} from "../../Services/restorant.service";

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent {
  restorants: RestorantDto[] = [];
  constructor(
    private restorantService: RestorantService
  ) { }

  ngOnInit(): void {
    this.getAllRestorants();
  }
  getAllRestorants() {
    this.restorantService.getAllRestorants().subscribe(
      (restorants: RestorantDto[]) => {
        this.restorants = restorants;
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la récupération des restaurants : ', error);
      }
    );
  }
}
