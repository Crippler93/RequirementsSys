import { createAction, props } from '@ngrx/store';
import { Type } from '../models/Type';

export const getAllTypes = createAction('[TypeList Component] Get All');
export const getAllTypesSuccess = createAction('[TypeList Component] Get All Success', props<{payload: Type[]}>());
