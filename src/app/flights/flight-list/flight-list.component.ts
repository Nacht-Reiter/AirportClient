import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../shared/services/flight.service';
import { FlightModel } from '../../shared/models/flight.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor(private flightService : FlightService) {
  }

  ngOnInit() {
    this.flightService.getItems().subscribe((data) => {
      this.flightService.itemsList = data;
    }); 
   
  }

  onDelete(item : FlightModel){
    this.flightService.deleteItem(item.id).subscribe(() => 
    this.flightService.getItems().subscribe((data) => {
      this.flightService.itemsList = data;
    }));
  }

  onEdit(item : FlightModel){
    this.flightService.selectedItem = {...item};
  }

}
