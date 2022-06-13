import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { formTypeSubmitted, formTypeUpdated } from '../../state/type.actions';
import { selectFeatureForm } from '../../state/type.selectors';
import { TypeStorage } from '../../models/TypeStorage';

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

  constructor(private store: Store<TypeStorage>) {}

  ngOnInit(): void {
    this.store.select(selectFeatureForm).pipe(
      take(1)
    ).subscribe((({data, loading}) => {
      this.typeForm.patchValue(data);
      this.isLoading = loading
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
