import { Injectable } from '@angular/core';
import { PilotModel } from '../models/pilot.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PilotService {

  selectedItem : PilotModel;
  itemsList : PilotModel[];
  private URL : string = "http://localhost:51460/api/Pilots/";
  constructor(private httpClient: HttpClient) { }

  getItems(){
      return this.httpClient.get<PilotModel[]>(this.URL);
  }

  addItem(item : PilotModel){
    return this.httpClient.post(this.URL, item); 
  }

  updateItem(id: number, item : PilotModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
