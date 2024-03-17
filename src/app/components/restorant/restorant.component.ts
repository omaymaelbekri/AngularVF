import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestorantDto} from "../../Model/restorant-dto";
import {PlatDTO} from "../../Model/plat-dto";
import {RestorantService} from "../../Services/restorant.service";
import {PlatService} from "../../Services/plat.service";


@Component({
  selector: 'app-restorant',
  templateUrl: './restorant.component.html',
  standalone: true,
  styleUrls: ['./restorant.component.css']
})
export class RestorantComponent implements OnInit {
  restorant: RestorantDto | undefined;
  plats: PlatDTO[] = [];

  constructor(
    private route: ActivatedRoute,
    private restorantService: RestorantService,
    private platService: PlatService
  ) { }
  ngOnInit(): void {
    this.getRestorantDetails();
  }

  getRestorantDetails() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restorantService.getRestorantById(id).subscribe(
      (restorant: RestorantDto) => {
        this.restorant = restorant;
        this.getPlatsByRestaurantId(id);
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la récupération des détails du restaurant : ', error);
      }
    );
  }

  getPlatsByRestaurantId(id: number) {
    this.platService.getAllPlatsResto(id).subscribe(
      (plats: PlatDTO[]) => {
        this.plats = plats;
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la récupération des plats : ', error);
      }
    );
  }
}
