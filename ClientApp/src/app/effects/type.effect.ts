import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { TypeService } from '../type.service';


@Injectable()
export class TypeEffect {
  loadTypes$ = createEffect(() => this.actions$.pipe(
    ofType('[TypeList Component] Get All'),
    mergeMap(() => this.typeService.getTypes()
      .pipe(
        map(types => ({ type: '[TypeList Component] Get All Success', payload: types})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private typeService: TypeService
  ) {}
}
