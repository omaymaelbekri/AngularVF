import { Component, OnInit } from '@angular/core';
import {RecetteDTO} from "../../Model/recette-dto";
import {RestorantDto} from "../../Model/restorant-dto";
import {RecetteService} from "../../Services/recette.service";
import {RestorantService} from "../../Services/restorant.service";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recettes: RecetteDTO[] = [];
  restorant: RestorantDto ;

  constructor(
    private recetteService: RecetteService,
    private restorantService: RestorantService
  ) { }

  ngOnInit(): void {
    this.getAllRecettes();
    this.getAllRestorants();
  }

  getAllRecettes() {
    this.recetteService.getAllRecettes().subscribe(
      (recettes: RecetteDTO[]) => {
        this.recettes = recettes;
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la récupération des recettes : ', error);
      }
    );
  }

  getAllRestorants() {
    this.restorantService.getRestorantById(1).subscribe(
      (restorant: RestorantDto) => {
        this.restorant = restorant;
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la récupération des restaurants : ', error);
      }
    );
  }
}
