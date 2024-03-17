import { Component, OnInit } from '@angular/core';
import {RecetteDTO} from "../../Model/recette-dto";
import {RecetteService} from "../../Services/recette.service";
@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  standalone: true,
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  recettes: RecetteDTO[];

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.getRecettes();
  }

  getRecettes(): void {
    this.recetteService.getAllRecettes()
      .subscribe(recettes => this.recettes = recettes);
  }
}
