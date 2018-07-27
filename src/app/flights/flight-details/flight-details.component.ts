import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../shared/services/flight.service';
import { NgForm } from '@angular/forms';
import { FlightModel } from '../../shared/models/flight.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  constructor(private flightService : FlightService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.id == null){
      this.flightService.addItem(form.value)
      .subscribe(() => {
        this.resetForm(form);
        this.flightService.getItems().subscribe((data) => {
          this.flightService.itemsList = data;
        });
      });
      
    }
    else{
      this.flightService.updateItem(form.value.id, form.value).subscribe(() =>
        this.flightService.getItems().subscribe((data) => {
          this.flightService.itemsList = data;
      }));
      
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.flightService.selectedItem = new FlightModel;
  }

}
