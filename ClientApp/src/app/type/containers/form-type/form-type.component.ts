import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TypeForm } from '../../models/TypeStorage';
import { selectFormLoading } from '../../state/type.selectors';

@Component({
  selector: 'type-form-container',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.css'],
})
export class FormTypeComponent implements OnInit {
  private form$: Observable<boolean>;
  private subject: Subject<any> = new Subject();
  public formValue: TypeForm = { typeName: '' };
  public isLoading: boolean = false;

  constructor(private store: Store<any>) {
    this.form$ = this.store.select(selectFormLoading)
  }

  ngOnInit() {
    this.form$.pipe(takeUntil(this.subject)).subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
}
