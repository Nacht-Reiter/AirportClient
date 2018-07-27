import { Component, OnInit } from '@angular/core';
import { PilotService } from '../../shared/services/pilot.service';
import { NgForm } from '@angular/forms';
import { PilotModel } from '../../shared/models/pilot.model';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {

  
  constructor(private pilotService : PilotService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.id == null){
      this.pilotService.addPilot(form.value)
      .subscribe(() => {
        this.resetForm(form);
        this.pilotService.getPilots().subscribe((data) => {
          this.pilotService.pilotsList = data;
        });
      });
      
    }
    else{
      this.pilotService.updatePilot(form.value.id, form.value).subscribe(() =>
        this.pilotService.getPilots().subscribe((data) => {
          this.pilotService.pilotsList = data;
      }));
      
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.pilotService.selectedPilot = new PilotModel;
  }
}
