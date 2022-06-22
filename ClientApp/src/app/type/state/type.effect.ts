import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, mergeMap, map, exhaustMap } from 'rxjs/operators';

import { Type } from '../models/Type';
import { TypeService } from '../services/type.service';
import {
  typesActions
} from './type.actions';

@Injectable()
export class TypeEffect {
  loadTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(typesActions.GET_TYPES),
      mergeMap(() =>
        this.typeService.getTypes().pipe(
          map((types) => ({
            type: typesActions.GET_TYPES_SUCCESS,
            payload: types,
          })),
          catchError(() => of({
            type: typesActions.GET_TYPES_FAILURE,
          }))
        )
      )
    )
  );

  submitType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(typesActions.FORM_SUBMITTED),
      exhaustMap((action: any) =>
        this.typeService.createType(new Type(action.typeName)).pipe(
          map(() => ({
            type: typesActions.FORM_SUBMITTED_SUCCESS,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(typesActions.DELETE_TYPE),
      mergeMap(({payload}) =>
        this.typeService.deleteType(payload).pipe(
          map(() => ({
            type: typesActions.DELETE_TYPE_SUCCESS,
          })),
          catchError(() => of({
            type: typesActions.DELETE_TYPE_FAILURE
          }))
        )
      )
    )
  )

  constructor(private actions$: Actions, private typeService: TypeService) {}
}
