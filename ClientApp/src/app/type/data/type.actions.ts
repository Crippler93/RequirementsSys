import { createAction, props } from '@ngrx/store';
import { Type } from '../models/Type';
import { TypeForm } from '../models/TypeState';

export const getAllTypes = createAction('[TypeList Component] Get All');
export const getAllTypesSuccess = createAction(
  '[TypeList Component] Get All Success',
  props<{ payload: Type[] }>()
);
export const formTypeSubmitted = createAction(
  '[FormType Component] Form Submitted',
  props<TypeForm>()
);
export const formTypeSubmittedSuccess = createAction(
  '[FormType Component] Form Submitted Success'
);
export const formTypeUpdated = createAction(
  '[FormType Component] Form Updated',
  props<TypeForm>()
);
