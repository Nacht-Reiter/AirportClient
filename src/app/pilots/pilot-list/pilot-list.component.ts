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
    this.pilotService.getPilots().subscribe((data) => {
      this.pilotService.pilotsList = data;
    });
   
  }

  onDelete(item : PilotModel){
    this.pilotService.deletePilot(item.id).subscribe(() => 
    this.pilotService.getPilots().subscribe((data) => {
      this.pilotService.pilotsList = data;
    }));
  }

  onEdit(item : PilotModel){
    this.pilotService.selectedPilot = {...item};
    console.log(this.pilotService)
  }

}
