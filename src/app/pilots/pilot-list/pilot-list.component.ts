import { Component, OnInit } from '@angular/core';
import { PilotService } from '../../shared/services/pilot.service';
import { NgForm } from '@angular/forms';
import { PilotModel } from '../../shared/models/pilot.model';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent{

  
  constructor(private pilotService : PilotService) {
  }

  ngOnInit() {
    this.pilotService.getItems().subscribe((data) => {
      this.pilotService.itemsList = data;
    });
   
  }

  onDelete(item : PilotModel){
    this.pilotService.deleteItem(item.id).subscribe(() => 
    this.pilotService.getItems().subscribe((data) => {
      this.pilotService.itemsList = data;
    }));
  }

  onEdit(item : PilotModel){
    this.pilotService.selectedItem = {...item};
  }

}
