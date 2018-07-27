import { Injectable } from '@angular/core';
import { DepartureModel } from '../models/departure.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DepartureService {

  selectedItem : DepartureModel;
  itemsList : DepartureModel[];
  private URL : string = "http://localhost:51460/api/Departuress/";
  constructor(private httpClient: HttpClient) { }

  getItems(){
      return this.httpClient.get<DepartureModel[]>(this.URL);
  }

  addItem(item : DepartureModel){
    return this.httpClient.post(this.URL, item); 
  }

  updateItem(id: number, item : DepartureModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
