import { Component, OnInit } from '@angular/core';
import { AirCraftService } from '../../shared/services/air-craft.service';
import { NgForm } from '@angular/forms';
import { AirCraftModel } from '../../shared/models/air-craft.model';

@Component({
  selector: 'app-air-crafts-details',
  templateUrl: './air-crafts-details.component.html',
  styleUrls: ['./air-crafts-details.component.css']
})
export class AirCraftsDetailsComponent implements OnInit {

  constructor(private airCraftService : AirCraftService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.id == null){
      this.airCraftService.addItem(form.value)
      .subscribe(() => {
        this.resetForm(form);
        this.airCraftService.getItems().subscribe((data) => {
          this.airCraftService.itemsList = data;
        });
      });
      
    }
    else{
      this.airCraftService.updateItem(form.value.id, form.value).subscribe(() =>
        this.airCraftService.getItems().subscribe((data) => {
          this.airCraftService.itemsList = data;
      }));
      
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.airCraftService.selectedItem = new AirCraftModel;
  }

}
