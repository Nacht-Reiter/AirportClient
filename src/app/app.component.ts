import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public router: Router){}

  openPilots(){
    this.router.navigate(['/pilots']);
  }
  openStewardesses(){
    this.router.navigate(['/stewardesses']);
  }
  openTickets(){
    this.router.navigate(['/tickets']);
  }
}
