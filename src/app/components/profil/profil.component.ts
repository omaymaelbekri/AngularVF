import { Component } from '@angular/core';
import {RecetteDTO} from "../../Model/recette-dto";
import {RecetteService} from "../../Services/recette.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {

  recettes: RecetteDTO[];
  constructor(private recetteService: RecetteService,
               private route: ActivatedRoute
  ) { }

  loadRecettesByIdUtilisateur(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recetteService.findAllByIdUtilisateur(id)
      .subscribe((data: any[]) => {
        this.recettes = data;
        console.log(this.recettes); // Vous pouvez afficher les recettes dans la console ou les utiliser comme vous le souhaitez dans votre composant
      }, error => {
        console.log(error); // Gérer les erreurs si nécessaire
      });
  }


}
