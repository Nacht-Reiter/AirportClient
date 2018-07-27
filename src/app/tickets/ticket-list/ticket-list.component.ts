import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../shared/services/ticket.service';
import { TicketModel } from '../../shared/models/ticket.model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  constructor(private ticketService : TicketService) {
  }

  ngOnInit() {
    this.ticketService.getItems().subscribe((data) => {
      this.ticketService.itemsList = data;
    }); 
   
  }

  onDelete(item : TicketModel){
    this.ticketService.deleteItem(item.id).subscribe(() => 
    this.ticketService.getItems().subscribe((data) => {
      this.ticketService.itemsList = data;
    }));
  }

  onEdit(item : TicketModel){
    this.ticketService.selectedItem = {...item};
  }

}
