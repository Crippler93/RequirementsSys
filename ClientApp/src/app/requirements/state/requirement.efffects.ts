import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  getAllRequirements,
  getAllRequirementsSuccess,
  getAllRequirementsError,
  requirementFormSubmit,
  requirementFormSubmitFailure,
  requirementFormSubmitSuccess,
} from './requirement.actions';
import { RequirementsRequestService } from '../services/requirements-request.service';
import { RequirementForm } from './requirements.state';

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

  createRequirement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requirementFormSubmit.type),
      exhaustMap(({payload}) =>
        this.requirementService.createRequirement(payload).pipe(
          map(() => ({
            type: requirementFormSubmitSuccess.type
          })),
          catchError(() =>
            of({
              type: requirementFormSubmitFailure.type,
              payload: 'Error creating requirement'
            })
          )
        )
      )
    )
  )
}
