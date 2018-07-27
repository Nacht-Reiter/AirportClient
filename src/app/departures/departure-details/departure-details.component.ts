import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../../shared/services/departure.service';
import { NgForm } from '@angular/forms';
import { DepartureModel } from '../../shared/models/departure.model';

@Component({
  selector: 'app-departure-details',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.css']
})
export class DepartureDetailsComponent implements OnInit {

  constructor(private departureService : DepartureService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.id == null){
      this.departureService.addItem(form.value)
      .subscribe(() => {
        this.resetForm(form);
        this.departureService.getItems().subscribe((data) => {
          this.departureService.itemsList = data;
        });
      });
      
    }
    else{
      this.departureService.updateItem(form.value.id, form.value).subscribe(() =>
        this.departureService.getItems().subscribe((data) => {
          this.departureService.itemsList = data;
      }));
      
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.departureService.selectedItem = new DepartureModel;
  }

}
