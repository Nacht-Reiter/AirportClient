import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../shared/services/crew.service';
import { NgForm } from '@angular/forms';
import { CrewModel } from '../../shared/models/crew.model';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {

  constructor(private crewService : CrewService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.id == null){
      this.crewService.addItem(form.value)
      .subscribe(() => {
        this.resetForm(form);
        this.crewService.getItems().subscribe((data) => {
          this.crewService.itemsList = data;
        });
      });
      
    }
    else{
      this.crewService.updateItem(form.value.id, form.value).subscribe(() =>
        this.crewService.getItems().subscribe((data) => {
          this.crewService.itemsList = data;
      }));
      
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.crewService.selectedItem = new CrewModel;
  }

}
