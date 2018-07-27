import { Component, OnInit } from '@angular/core';
import { AirCraftTypeService } from '../shared/services/air-craft-type.service';

@Component({
  selector: 'app-air-craft-types',
  templateUrl: './air-craft-types.component.html',
  styleUrls: ['./air-craft-types.component.css'],
  providers: [AirCraftTypeService]
})
export class AirCraftTypesComponent implements OnInit {

  constructor(private airCraftTypeService: AirCraftTypeService) { }

  ngOnInit() {
  }

}
