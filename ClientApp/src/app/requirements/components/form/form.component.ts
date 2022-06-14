import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Type } from 'src/app/type/models/Type';
import { RequirementForm } from '../../state/requirements.state';
import { debouncedAndDistinct } from '../../utils/pipes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() onUpdate = new EventEmitter<RequirementForm>();
  @Input() values: RequirementForm = {
    description: '',
    title: '',
    typeID: '',
  }
  @Input() types: Type[] = []
  @Output() onSubmit = new EventEmitter<RequirementForm>();
  requirementForm: FormGroup


  constructor(private fb: FormBuilder) {
    this.requirementForm = this.fb.group({
      title: '',
      description: '',
      typeID: '',
    })
  }

  ngOnInit(): void {

    this.requirementForm.patchValue(this.values);

    debouncedAndDistinct(this.requirementForm.valueChanges)
      .subscribe(form => {
        this.onUpdate.emit(form);
      })
  }

  submit(): void {
    this.onSubmit.emit(this.requirementForm.value);
  }
}
