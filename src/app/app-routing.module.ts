import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ServicesComponent} from "./components/services/services.component";
import {RestorantComponent} from "./components/restorant/restorant.component";
import {ContactComponent} from "./components/contact/contact.component";
import {RecetteComponent} from "./components/recette/recette.component";
import {ListRestoComponent} from "./components/list-resto/list-resto.component";
import {ProfilComponent} from "./components/profil/profil.component";

const routes: Routes = [{ path: 'recette', component:RecetteComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'restorent', component:RestorantComponent },
  { path: 'service', component:ServicesComponent },
  { path: 'about', component:AboutComponent },
  { path: 'home', component:HomeComponent },
  { path: 'listresto', component:ListRestoComponent },
  { path: 'profil', component:ProfilComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
