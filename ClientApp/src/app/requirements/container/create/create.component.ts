import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Type } from 'src/app/type/models/Type';
import { getAllTypes } from 'src/app/type/state/type.actions';
import AppStorage from 'src/app/types/Storage';
import { requirementFormSubmit, updateRequirementForm } from '../../state/requirement.actions';
import { selectRequirementForm, selectTypeList } from '../../state/requirement.selectors';
import { RequirementForm, RequirementStorage } from '../../state/requirements.state';
import { takeOne } from '../../utils/pipes';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  private subject = new Subject();
  formState$: Observable<RequirementForm>
  typeState$: Observable<Type[]>
  types: Type[] = [];
  form: RequirementForm = {
    description: '',
    title: '',
    typeID: '',
  }

  constructor(private store: Store<AppStorage>) {
    this.formState$ = this.store.select(selectRequirementForm);
    this.typeState$ = this.store.select(selectTypeList);
  }

  ngOnInit(): void {
    this.fetchTypeList();
    this.getTypeList();
    this.getFormData();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  getTypeList() {
    this.typeState$.subscribe((types) => {
      this.types = types
    })
  }

  getFormData() {
    this.formState$.pipe(
      takeUntil(this.subject)
    ).subscribe(form => {
      this.form = form
    })
  }

  fetchTypeList() {
    this.store.dispatch(getAllTypes());
  }

  formUpdated(form: RequirementForm) {
    this.store.dispatch(updateRequirementForm({payload: form}))
  }

  formSubmitted(form: RequirementForm) {
    this.store.dispatch(requirementFormSubmit({payload: form}));
  }
}
