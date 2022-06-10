import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormState, TypeForm, TypeState } from '../../models/TypeState';

@Component({
  selector: 'type-form-container',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.css'],
})
export class FormTypeComponent implements OnInit {
  private form$: Observable<FormState>;
  private subject: Subject<any> = new Subject();
  public formValue: TypeForm = { typeName: '' };
  public isLoading: boolean = false;

  constructor(private store: Store<TypeState>) {
    this.form$ = store.select('types');
  }

  ngOnInit() {
    this.form$.pipe(takeUntil(this.subject)).subscribe((form) => {
      this.isLoading = form.loading;
      this.formValue = form.data;
    });
  }

  submitType() {}
}
