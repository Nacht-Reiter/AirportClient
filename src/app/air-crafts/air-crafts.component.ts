import { Component, OnInit } from '@angular/core';
import { AirCraftService } from '../shared/services/air-craft.service';

@Component({
  selector: 'app-air-crafts',
  templateUrl: './air-crafts.component.html',
  styleUrls: ['./air-crafts.component.css'],
  providers: [AirCraftService]
})
export class AirCraftsComponent implements OnInit {

  constructor(private airCraftService: AirCraftService) { }

  ngOnInit() {
  }

}
