import { Injectable } from '@angular/core';
import { CrewModel } from '../models/crew.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CrewService {

  selectedItem : CrewModel;
  itemsList : CrewModel[];
  private URL : string = "http://localhost:51460/api/Crews/";
  constructor(private httpClient: HttpClient) { }

  getItems(){
      return this.httpClient.get<CrewModel[]>(this.URL);
  }

  addItem(item : CrewModel){
    return this.httpClient.post(this.URL, item); 
  }

  updateItem(id: number, item : CrewModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
