import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StewardessModel } from '../models/stewardess.model';

@Injectable()
export class StewardessService {

  selectedItem : StewardessModel;
  itemsList : StewardessModel[];
  private URL : string = "http://localhost:51460/apiStewardesses/";
  constructor(private httpClient: HttpClient) { }

  getItems(){
      return this.httpClient.get<StewardessModel[]>(this.URL);
  }

  addItem(item : StewardessModel){
    return this.httpClient.post(this.URL, item); 
  }

  updateItem(id: number, item : StewardessModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deleteItem(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
