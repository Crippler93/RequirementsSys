import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  Requirement,
  RequirementState,
  RequirementStorage,
} from '../../state/requirements.state';
import { getAllRequirements } from '../../state/requirement.actions';
import { selectRequirement } from '../../state/requirement.selectors';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  loading: boolean = false;
  requirements: Requirement[] = [];
  error = '';

  requirements$: Observable<RequirementState>;

  constructor(private store: Store<RequirementStorage>) {
    this.requirements$ = this.store.select(selectRequirement);
  }

  ngOnInit(): void {
    this.store.dispatch(getAllRequirements());
    this.requirements$.subscribe(({ requirements }) => {
      this.requirements = requirements.data;
      this.loading = requirements.loading;
      this.error = requirements.error;
    });
  }
}
