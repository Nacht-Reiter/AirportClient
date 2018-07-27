import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../../shared/services/departure.service';
import { DepartureModel } from '../../shared/models/departure.model';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  constructor(private departureService : DepartureService) {
  }

  ngOnInit() {
    this.departureService.getItems().subscribe((data) => {
      this.departureService.itemsList = data;
    }); 
   
  }

  onDelete(item : DepartureModel){
    this.departureService.deleteItem(item.id).subscribe(() => 
    this.departureService.getItems().subscribe((data) => {
      this.departureService.itemsList = data;
    }));
  }

  onEdit(item : DepartureModel){
    this.departureService.selectedItem = {...item};
  }


}
