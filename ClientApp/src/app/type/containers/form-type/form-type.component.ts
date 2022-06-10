import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormState, TypeForm, TypeState } from '../../models/TypeState';
import { formTypeSubmitted } from '../../data/type.actions';

@Component({
  selector: 'type-form-container',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.css'],
})
export class FormTypeComponent implements OnInit {
  private form$: Observable<TypeState>;
  private subject: Subject<any> = new Subject();
  public formValue: TypeForm = { typeName: '' };
  public isLoading: boolean = false;

  constructor(private store: Store<any>) {
    this.form$ = this.store.select('type');
  }

  ngOnInit() {
    this.form$.pipe(takeUntil(this.subject)).subscribe(({form}) => {
      this.isLoading = form.loading;
      this.formValue = form.data;
    });
  }
}
