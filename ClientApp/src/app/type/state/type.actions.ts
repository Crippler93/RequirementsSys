import { createAction, props } from '@ngrx/store';
import { Type } from '../models/Type';
import { TypeForm } from '../models/TypeStorage';

export enum typesActions {
  GET_TYPES = '[TypeList Component] Get All',
  GET_TYPES_SUCCESS = '[TypeList Component] Get All Success',
  GET_TYPES_FAILURE = '[TypeList Component] Get All Failure',
  FORM_SUBMITTED = '[FormType Component] Form Submitted',
  FORM_SUBMITTED_SUCCESS = '[FormType Component] Form Submitted Success',
  FORM_UPDATED = '[FormType Component] Form Updated',
  DELETE_TYPE = 'DELETE TYPE',
  DELETE_TYPE_SUCCESS = 'DELETE TYPE SUCCESS',
  DELETE_TYPE_FAILURE = 'DELETE TYPE FAILURE'
}

export const getAllTypes = createAction(typesActions.GET_TYPES);
export const getAllTypesSuccess = createAction(
  typesActions.GET_TYPES_SUCCESS,
  props<{ payload: Type[] }>()
);
export const formTypeSubmitted = createAction(
  typesActions.FORM_SUBMITTED,
  props<TypeForm>()
);
export const formTypeSubmittedSuccess = createAction(
  typesActions.FORM_SUBMITTED_SUCCESS
);
export const formTypeUpdated = createAction(
  typesActions.FORM_UPDATED,
  props<TypeForm>()
);

export const deleteType = createAction(typesActions.DELETE_TYPE, props<{ payload: any}>());
export const deleteTypeSuccess = createAction(typesActions.DELETE_TYPE_SUCCESS);
export const deleteTypeFailure = createAction(typesActions.DELETE_TYPE_FAILURE, props<{ payload: string}>());
