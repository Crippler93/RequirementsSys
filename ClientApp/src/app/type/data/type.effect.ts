import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, mergeMap, map, exhaustMap } from 'rxjs/operators';
import { TypeService } from '../services/type.service';
import {
  formTypeSubmitted,
  formTypeSubmittedSuccess,
  getAllTypes,
  getAllTypesSuccess,
} from './type.actions';

@Injectable()
export class TypeEffect {
  loadTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllTypes.type),
      mergeMap(() =>
        this.typeService.getTypes().pipe(
          map((types) => ({
            type: getAllTypesSuccess.type,
            payload: types,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  submitType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(formTypeSubmitted.type),
      exhaustMap((action) =>
        this.typeService.createType(action).pipe(
          map(() => ({
            type: formTypeSubmittedSuccess.type,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private typeService: TypeService) {}
}
