import { createReducer, on } from '@ngrx/store';
import {
  getAllTypes,
  getAllTypesSuccess,
  formTypeSubmitted,
  formTypeUpdated,
  formTypeSubmittedSuccess,
} from './type.actions';
import { TypeState } from '../models/TypeState';

export const initialState: TypeState = {
  list: {
    loading: false,
    data: [],
  },
  form: {
    loading: false,
    data: {
      typeName: '',
    },
  },
};

export const typeReducer = createReducer(
  initialState,
  on(getAllTypes, (state) => ({
    ...state,
    list: {
      ...state.list,
      loading: true,
    },
  })),
  on(getAllTypesSuccess, (state, { payload }) => ({
    ...state,
    list: {
      loading: false,
      data: payload,
    },
  })),
  on(formTypeSubmittedSuccess, (state) => ({
    ...state,
    form: {
      data: {
        typeName: '',
      },
      loading: false,
    },
  })),
  on(formTypeUpdated, (state, { typeName }) => ({
    ...state,
    form: {
      ...state.form,
      data: {
        typeName,
      },
    },
  }))
);
