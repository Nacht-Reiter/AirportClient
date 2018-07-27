import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotService } from './services/pilot.service';
import { HttpClientModule } from '@angular/common/http';
import { StewardessService } from './services/stewardess.service';
import { TicketService } from './services/ticket.service';
import { AirCraftService } from './services/air-craft.service';
import { AirCraftTypeService } from './services/air-craft-type.service';
import { FlightService } from './services/flight.service';
import { DepartureService } from './services/departures.service';
import { CrewService } from './services/crew.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ PilotService, StewardessService, TicketService, AirCraftService, AirCraftTypeService, FlightService, DepartureService, CrewService ]
    };
  }
 }
