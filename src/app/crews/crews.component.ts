import { Component, OnInit } from '@angular/core';
import { CrewService } from '../shared/services/crew.service';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.css'],
  providers: [CrewService]
})
export class CrewsComponent implements OnInit {

  constructor(private crewService: CrewService) { }

  ngOnInit() {
  }

}
