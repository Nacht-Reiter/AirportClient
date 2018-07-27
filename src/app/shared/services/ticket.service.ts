import { Injectable } from '@angular/core';
import { TicketModel } from '../models/ticket.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TicketService {

  selectedItem : TicketModel;
  itemsList : TicketModel[];
  private URL : string = "http://localhost:51460/api/Tickets/";
  constructor(private httpClient: HttpClient) { }

  getItems(){
      return this.httpClient.get<TicketModel[]>(this.URL);
  }

  addItem(item : TicketModel){
    return this.httpClient.post(this.URL, item); 
  }

  updateItem(id: number, item : TicketModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
