import { Component, OnInit } from '@angular/core';
import { AirCraftService } from '../../shared/services/air-craft.service';
import { AirCraftModel } from '../../shared/models/air-craft.model';

@Component({
  selector: 'app-air-crafts-list',
  templateUrl: './air-crafts-list.component.html',
  styleUrls: ['./air-crafts-list.component.css']
})
export class AirCraftsListComponent implements OnInit {

  constructor(private airCraftService : AirCraftService) {
  }

  ngOnInit() {
    this.airCraftService.getItems().subscribe((data) => {
      this.airCraftService.itemsList = data;
    }); 
   
  }

  onDelete(item : AirCraftModel){
    this.airCraftService.deleteItem(item.id).subscribe(() => 
    this.airCraftService.getItems().subscribe((data) => {
      this.airCraftService.itemsList = data;
    }));
  }

  onEdit(item : AirCraftModel){
    this.airCraftService.selectedItem = {...item};
  }

}
