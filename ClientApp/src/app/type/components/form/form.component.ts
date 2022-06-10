import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { formTypeSubmitted, formTypeUpdated } from '../../data/type.actions';

@Component({
  selector: 'type-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  wasValidated: boolean = false;
  isLoading: boolean = false;
  private subject: Subject<any> = new Subject();

  public typeForm = new FormGroup({
    typeName: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('type').pipe(
      take(1)
    ).subscribe((({form}) => {
      this.typeForm.patchValue(form.data);
      this.isLoading = form.isLoading
    }))

    this.typeForm.valueChanges
      .pipe(takeUntil(this.subject))
      .subscribe((value) => {
        this.store.dispatch(formTypeUpdated(value));
      });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  submitType(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.wasValidated = true;
    if (this.typeForm.valid) {
      this.store.dispatch(formTypeSubmitted(this.typeForm.value))
    }
  }
}
