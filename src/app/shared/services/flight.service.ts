import { Injectable } from '@angular/core';
import { FlightModel } from '../models/flight.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FlightService {

  selectedItem : FlightModel;
  itemsList : FlightModel[];
  private URL : string = "http://localhost:51460/api/Flights/";
  constructor(private httpClient: HttpClient) { }

  getItems(){
      return this.httpClient.get<FlightModel[]>(this.URL);
  }

  addItem(item : FlightModel){
    return this.httpClient.post(this.URL, item); 
  }

  updateItem(id: number, item : FlightModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
