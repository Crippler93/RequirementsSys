import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-form-type',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.css']
})
export class FormTypeComponent implements OnInit {

  wasValidated: boolean = false;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
  }

  submitType(event: any, form: NgForm) {
    event.preventDefault();
    event.stopPropagation();
    this.wasValidated = true;
    if (form.valid) {
      console.log(form.value);
      this.typeService.createType(form.value).subscribe(console.log);
    }
  }
}
