import { Component, OnInit } from '@angular/core';
import { AirCraftTypeService } from '../../shared/services/air-craft-type.service';
import { AirCraftTypeModel } from '../../shared/models/air-craft-type.model';

@Component({
  selector: 'app-air-craft-types-list',
  templateUrl: './air-craft-types-list.component.html',
  styleUrls: ['./air-craft-types-list.component.css']
})
export class AirCraftTypesListComponent implements OnInit {

  constructor(private airCraftTypeService : AirCraftTypeService) {
  }

  ngOnInit() {
    this.airCraftTypeService.getItems().subscribe((data) => {
      this.airCraftTypeService.itemsList = data;
    }); 
   
  }

  onDelete(item : AirCraftTypeModel){
    this.airCraftTypeService.deleteItem(item.id).subscribe(() => 
    this.airCraftTypeService.getItems().subscribe((data) => {
      this.airCraftTypeService.itemsList = data;
    }));
  }

  onEdit(item : AirCraftTypeModel){
    this.airCraftTypeService.selectedItem = {...item};
  }

}
