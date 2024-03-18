import { Component } from '@angular/core';
import {RestorantDto} from "../../Model/restorant-dto";
import {RecetteService} from "../../Services/recette.service";
import {RestorantService} from "../../Services/restorant.service";
import {VilleDTO} from "../../Model/ville-dto";
import {RecetteDTO} from "../../Model/recette-dto";
import {VilleService} from "../../Services/ville.service";

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent {
  restorants: RestorantDto[] = [];
  nomVille: string = ""; // Variable pour stocker le nom de la ville à rechercher
  errorMessage: string = "";
  constructor(
    private restorantService: RestorantService,
    private villeService : VilleService
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
  searchRecetteByVille(): void {
    this.errorMessage = ""; // Réinitialiser le message d'erreur à chaque recherche
    if (this.nomVille.trim() !== "") { // Vérifier si le champ de recherche n'est pas vide
      this.villeService.getAllVilleByNom(this.nomVille.trim()).subscribe(
        (ville: VilleDTO) => {
          if (ville) {
            this.restorantService.findAllByIdville(ville.id).subscribe(
              (data: RestorantDto[]) => {
                this.restorants = data;
              },
              error => {
                this.errorMessage = "Une erreur s'est produite lors du chargement des recettes.";
                console.error(error);
              }
            );
          } else {
            this.errorMessage = "La ville spécifiée n'existe pas.";
          }
        },
        error => {
          this.errorMessage = "Une erreur s'est produite lors de la recherche de la ville.";
          console.error(error);
        }
      );
    } else {
      this.errorMessage = "Veuillez saisir un nom de ville.";
    }
  }
}
