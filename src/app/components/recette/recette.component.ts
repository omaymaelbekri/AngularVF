import { Component, OnInit } from '@angular/core';
import {RecetteDTO} from "../../Model/recette-dto";
import {RecetteService} from "../../Services/recette.service";
import {NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {VilleDTO} from "../../Model/ville-dto";
import {VilleService} from "../../Services/ville.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  recettes: RecetteDTO[];
  id: number;

  ville: VilleDTO;
  nomVille: string = ""; // Variable pour stocker le nom de la ville à rechercher
  errorMessage: string = ""; // Variable pour stocker les messages d'erreur

  constructor(private recetteService: RecetteService,
              private villeService: VilleService) {
  }

  ngOnInit(): void {
    this.getRecettes();
  }

  getRecettes(): void {
    this.recetteService.getAllRecettes()
      .subscribe(recettes => this.recettes = recettes);
  }

  searchRecetteByVille(): void {
    this.errorMessage = ""; // Réinitialiser le message d'erreur à chaque recherche
    if (this.nomVille.trim() !== "") { // Vérifier si le champ de recherche n'est pas vide
      this.villeService.getAllVilleByNom(this.nomVille.trim()).subscribe(
        (ville: VilleDTO) => {
          if (ville) {
            this.recetteService.findAllByIdVille(ville.id).subscribe(
              (data: RecetteDTO[]) => {
                this.recettes = data;
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
