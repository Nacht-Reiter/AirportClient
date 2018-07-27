import { Component, OnInit } from '@angular/core';
import { StewardessService } from '../shared/services/stewardess.service';

@Component({
  selector: 'app-stewardesses',
  templateUrl: './stewardesses.component.html',
  styleUrls: ['./stewardesses.component.css'],
  providers: [StewardessService]
})
export class StewardessesComponent implements OnInit {

  constructor(private stewardessService: StewardessService) { }

  ngOnInit() {
  }

}
