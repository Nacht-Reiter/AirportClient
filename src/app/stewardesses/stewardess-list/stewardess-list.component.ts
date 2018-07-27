import { Component, OnInit } from '@angular/core';
import { StewardessService } from '../../shared/services/stewardess.service';
import { StewardessModel } from '../../shared/models/stewardess.model';

@Component({
  selector: 'app-stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css']
})
export class StewardessListComponent implements OnInit {

  constructor(private stewardessService : StewardessService) {
  }

  ngOnInit() {
    this.stewardessService.getItems().subscribe((data) => {
      this.stewardessService.itemsList = data;
    }); 
   
  }

  onDelete(item : StewardessModel){
    this.stewardessService.deleteItem(item.id).subscribe(() => 
    this.stewardessService.getItems().subscribe((data) => {
      this.stewardessService.itemsList = data;
    }));
  }

  onEdit(item : StewardessModel){
    this.stewardessService.selectedItem = {...item};
  }
}
