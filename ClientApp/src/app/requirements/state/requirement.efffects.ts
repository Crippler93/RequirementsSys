import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  getAllRequirements,
  getAllRequirementsSuccess,
  getAllRequirementsError,
} from './requirement.actions';
import { RequirementsRequestService } from '../services/requirements-request.service';

@Injectable()
export class RequirementEffects {
  constructor(
    private actions$: Actions,
    private requirementService: RequirementsRequestService
  ) {}

  loadRequirements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllRequirements.type),
      mergeMap(() =>
        this.requirementService.getRequirements().pipe(
          map((requirements) => ({
            type: getAllRequirementsSuccess.type,
            payload: requirements,
          })),
          catchError(() =>
            of({
              type: getAllRequirementsError.type,
              payload: 'Error getting requirements',
            })
          )
        )
      )
    )
  );
}
