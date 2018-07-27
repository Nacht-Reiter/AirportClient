import { Component, OnInit } from '@angular/core';
import { AirCraftTypeService } from '../../shared/services/air-craft-type.service';
import { NgForm } from '@angular/forms';
import { AirCraftTypeModel } from '../../shared/models/air-craft-type.model';

@Component({
  selector: 'app-air-craft-types-details',
  templateUrl: './air-craft-types-details.component.html',
  styleUrls: ['./air-craft-types-details.component.css']
})
export class AirCraftTypesDetailsComponent implements OnInit {

  constructor(private airCraftTypeService: AirCraftTypeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.id == null){
      this.airCraftTypeService.addItem(form.value)
      .subscribe(() => {
        this.resetForm(form);
        this.airCraftTypeService.getItems().subscribe((data) => {
          this.airCraftTypeService.itemsList = data;
        });
      });
      
    }
    else{
      this.airCraftTypeService.updateItem(form.value.id, form.value).subscribe(() =>
        this.airCraftTypeService.getItems().subscribe((data) => {
          this.airCraftTypeService.itemsList = data;
      }));
      
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.airCraftTypeService.selectedItem = new AirCraftTypeModel;
  }

}
