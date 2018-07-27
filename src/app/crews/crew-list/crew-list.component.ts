import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../shared/services/crew.service';
import { CrewModel } from '../../shared/models/crew.model';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  constructor(private crewService : CrewService) {
  }

  ngOnInit() {
    this.crewService.getItems().subscribe((data) => {
      this.crewService.itemsList = data;
    }); 
   
  }

  onDelete(item : CrewModel){
    this.crewService.deleteItem(item.id).subscribe(() => 
    this.crewService.getItems().subscribe((data) => {
      this.crewService.itemsList = data;
    }));
  }

  onEdit(item : CrewModel){
    this.crewService.selectedItem = {...item};
  }

}
