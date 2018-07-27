import { Component, OnInit } from '@angular/core';
import { TicketService } from '../shared/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers: [TicketService]
})
export class TicketsComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

}
