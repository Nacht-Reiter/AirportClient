import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PilotsComponent } from './pilots/pilots.component';
import { SewardessesComponent } from './sewardesses/sewardesses.component';
import { CrewsComponent } from './crews/crews.component';
import { AirCraftTypesComponent } from './air-craft-types/air-craft-types.component';
import { AirCraftsComponent } from './air-crafts/air-crafts.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FlightsComponent } from './flights/flights.component';
import { DeparturesComponent } from './departures/departures.component';
import { PilotDetailsComponent } from './pilots/pilot-details/pilot-details.component';
import { PilotListComponent } from './pilots/pilot-list/pilot-list.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AirCraftTypesListComponent } from './air-craft-types/air-craft-types-list/air-craft-types-list.component';
import { AirCraftTypesDetailsComponent } from './air-craft-types/air-craft-types-details/air-craft-types-details.component';
import { AirCraftsDetailsComponent } from './air-crafts/air-crafts-details/air-crafts-details.component';
import { AirCraftsListComponent } from './air-crafts/air-crafts-list/air-crafts-list.component';
import { CrewListComponent } from './crews/crew-list/crew-list.component';
import { CrewDetailsComponent } from './crews/crew-details/crew-details.component';
import { DepartureListComponent } from './departures/departure-list/departure-list.component';
import { DepartureDetailsComponent } from './departures/departure-details/departure-details.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightDetailsComponent } from './flights/flight-details/flight-details.component';
import { SewardessListComponent } from './stewardesses/sewardess-list/sewardess-list.component';
import { SewardessDetailsComponent } from './stewardesses/sewardess-details/sewardess-details.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component'

@NgModule({
  declarations: [
    AppComponent,
    PilotsComponent,
    SewardessesComponent,
    CrewsComponent,
    AirCraftTypesComponent,
    AirCraftsComponent,
    TicketsComponent,
    FlightsComponent,
    DeparturesComponent,
    PilotDetailsComponent,
    PilotListComponent,
    AirCraftTypesListComponent,
    AirCraftTypesDetailsComponent,
    AirCraftsDetailsComponent,
    AirCraftsListComponent,
    CrewListComponent,
    CrewDetailsComponent,
    DepartureListComponent,
    DepartureDetailsComponent,
    FlightListComponent,
    FlightDetailsComponent,
    SewardessListComponent,
    SewardessDetailsComponent,
    TicketListComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    SharedModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
