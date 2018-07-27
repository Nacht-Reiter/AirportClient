import { Injectable } from '@angular/core';
import { AirCraftTypeModel } from '../models/air-craft-type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AirCraftTypeService {

  selectedItem : AirCraftTypeModel;
  itemsList : AirCraftTypeModel[];
  private URL : string = "http://localhost:51460/api/AirCraftTypes/";
  constructor(private httpClient: HttpClient) { }

  getItems(){
      return this.httpClient.get<AirCraftTypeModel[]>(this.URL);
  }

  addItem(item : AirCraftTypeModel){
    return this.httpClient.post(this.URL, item); 
  }

  updateItem(id: number, item : AirCraftTypeModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
