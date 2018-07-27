import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TicketService } from '../../shared/services/ticket.service';
import { TicketModel } from '../../shared/models/ticket.model';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  constructor(private ticketService : TicketService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.id == null){
      this.ticketService.addItem(form.value)
      .subscribe(() => {
        this.resetForm(form);
        this.ticketService.getItems().subscribe((data) => {
          this.ticketService.itemsList = data;
        });
      });
      
    }
    else{
      this.ticketService.updateItem(form.value.id, form.value).subscribe(() =>
        this.ticketService.getItems().subscribe((data) => {
          this.ticketService.itemsList = data;
      }));
      
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.ticketService.selectedItem = new TicketModel;
  }
}
