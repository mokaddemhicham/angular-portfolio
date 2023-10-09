import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetencesComponent} from "./competences/competences.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  {'path': '', 'component': HomeComponent},
  {'path': 'competences', 'component': CompetencesComponent},
  {'path': 'about', 'component': AboutComponent},
  {'path': 'contact', 'component': ContactComponent},
  {'path': 'portfolio', 'component': PortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }