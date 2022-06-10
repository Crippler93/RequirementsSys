import { createReducer, on } from '@ngrx/store';
import { getAllTypes, getAllTypesSuccess } from '../actions/type.actions';
import { Type } from '../models/Type';

export const initialState: {loading: boolean, data: Type[]} = {
  loading: false,
  data: []
};

export const typeReducer = createReducer(
  initialState,
  on(getAllTypes, (state) => ({...state, loading: true})),
  on(getAllTypesSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload
  }))
);
