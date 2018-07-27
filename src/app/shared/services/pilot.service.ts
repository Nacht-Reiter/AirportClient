import { Injectable } from '@angular/core';
import { PilotModel } from '../models/pilot.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PilotService {

  selectedPilot : PilotModel;
  pilotsList : PilotModel[];
  private URL : string = "http://localhost:51460/api/Pilots/";
  constructor(private httpClient: HttpClient) { }

  getPilots(){
      return this.httpClient.get<PilotModel[]>(this.URL);
  }

  addPilot(item : PilotModel){
    return this.httpClient.post(this.URL, item); 
  }

  updatePilot(id: number, item : PilotModel) {
    return this.httpClient.put(this.URL + id, item);
  }

  deletePilot(id: number){
    return this.httpClient.delete(this.URL + id);
  }
}
