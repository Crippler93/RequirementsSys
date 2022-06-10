import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TypeForm } from '../../models/TypeState';

@Component({
  selector: 'type-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  wasValidated: boolean = false;
  @Input() formValue: TypeForm = { typeName: '' };
  private subject: Subject<any> = new Subject();

  public typeForm = new FormGroup({
    typeName: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.typeForm.patchValue(this.formValue);
    this.typeForm.valueChanges
      .pipe(takeUntil(this.subject))
      .subscribe((value) => {
        console.log(value);
      });
  }

  submitType(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.wasValidated = true;
  }
}
