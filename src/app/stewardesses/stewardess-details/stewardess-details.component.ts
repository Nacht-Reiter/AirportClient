import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StewardessService } from '../../shared/services/stewardess.service';
import { StewardessModel } from '../../shared/models/stewardess.model';

@Component({
  selector: 'app-stewardess-details',
  templateUrl: './stewardess-details.component.html',
  styleUrls: ['./stewardess-details.component.css']
})
export class StewardessDetailsComponent implements OnInit {

  constructor(private stewardessService : StewardessService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.id == null){
      this.stewardessService.addItem(form.value)
      .subscribe(() => {
        this.resetForm(form);
        this.stewardessService.getItems().subscribe((data) => {
          this.stewardessService.itemsList = data;
        });
      });
      
    }
    else{
      this.stewardessService.updateItem(form.value.id, form.value).subscribe(() =>
        this.stewardessService.getItems().subscribe((data) => {
          this.stewardessService.itemsList = data;
      }));
      
    }
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.stewardessService.selectedItem = new StewardessModel;
  }

}
