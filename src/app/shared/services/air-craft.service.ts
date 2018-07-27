import { Injectable } from '@angular/core';
import { AirCraftModel } from '../models/air-craft.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AirCraftService {

  selectedItem : AirCraftModel;
  itemsList : AirCraftModel[];
  private URL : string = "http://localhost:51460/api/AirCrafts/";
  constructor(private httpClient: HttpClient) { }

  getItems(){
      return this.httpClient.get<AirCraftModel[]>(this.URL);
  }

  addItem(item : AirCraftModel){
    return this.httpClient.post(this.URL, item); 
  }

  updateItem(id: number, item : AirCraftModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
