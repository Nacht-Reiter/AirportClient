import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { PilotsComponent } from './pilots/pilots.component';
import { CrewsComponent } from './crews/crews.component';
import { AirCraftsComponent } from './air-crafts/air-crafts.component';
import { AirCraftTypesComponent } from './air-craft-types/air-craft-types.component';
import { FlightsComponent } from './flights/flights.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DeparturesComponent } from './departures/departures.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: "stewardesses",
    component: StewardessesComponent
  },
  {
    path: "pilots",
    component: PilotsComponent
  },
  {
    path: "crews",
    component: CrewsComponent
  },
  {
    path: "air-crafts",
    component: AirCraftsComponent
  },
  {
    path: "air-craft-types",
    component: AirCraftTypesComponent
  },
  {
    path: "flights",
    component: FlightsComponent
  },
  {
    path: "tickets",
    component: TicketsComponent
  },
  {
    path: "departures",
    component: DeparturesComponent
  },
  {
    path: "",
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
