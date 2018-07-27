import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../shared/services/departure.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css'],
  providers: [DepartureService]
})
export class DeparturesComponent implements OnInit {

  constructor(private departureService: DepartureService) { }

  ngOnInit() {
  }

}
