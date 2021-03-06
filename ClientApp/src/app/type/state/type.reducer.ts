import { createReducer, on } from '@ngrx/store';
import {
  getAllTypes,
  getAllTypesSuccess,
  formTypeSubmitted,
  formTypeUpdated,
  formTypeSubmittedSuccess,
  deleteType,
  deleteTypeSuccess,
  deleteTypeFailure,
} from './type.actions';
import { TypeState } from '../models/TypeStorage';

export const initialState: TypeState = {
  list: {
    loading: false,
    data: [],
  },
  form: {
    loading: false,
    data: {
      typeName: '',
    }
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
  })),
  on(formTypeSubmitted, (state) => ({
    ...state,
    form: {
      data: {
        typeName: '',
      },
      loading: true,
    },
  })),
  on(deleteType, (state) => ({
    ...state,
    list: {
      ...state.list,
      loading: true
    }
  })),
  on(deleteTypeSuccess, (state) => ({
    ...state,
    list: {
      ...state.list,
      loading: false
    }
  })),
  on(deleteTypeFailure, (state) => ({
    ...state,
    list: {
      ...state.list,
      loading: false
    }
  }))
);
