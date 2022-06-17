import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  Requirement,
  RequirementState,
  RequirementStorage,
} from '../../state/requirements.state';
import { getAllRequirements } from '../../state/requirement.actions';
import { selectRequirement } from '../../state/requirement.selectors';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  requirements: Requirement[] = [];
  error = '';
  private subject = new Subject();

  requirements$: Observable<RequirementState>;

  constructor(private store: Store<RequirementStorage>) {
    this.requirements$ = this.store.select(selectRequirement);
  }

  ngOnInit(): void {
    this.store.dispatch(getAllRequirements());
    this.requirements$
    .pipe(
      takeUntil(this.subject)
    )
    .subscribe(({ requirements }) => {
      this.requirements = requirements.data;
      this.loading = requirements.loading;
      this.error = requirements.error;
    });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }
}
