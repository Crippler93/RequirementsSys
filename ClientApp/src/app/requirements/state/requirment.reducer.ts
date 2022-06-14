import { createReducer, on } from '@ngrx/store';

import { initialState, RequirementState } from './requirements.state';
import {
  getAllRequirements,
  getAllRequirementsError,
  getAllRequirementsSuccess,
  requirementFormSubmit,
  requirementFormSubmitFailure,
  requirementFormSubmitSuccess,
  updateRequirementForm,
} from './requirement.actions';

export const requirementReducer = createReducer(
  initialState,
  on(getAllRequirements, (state: RequirementState) => ({
    ...state,
    requirements: {
      data: [],
      loading: true,
      error: state.requirements.error,
    },
  })),
  on(getAllRequirementsSuccess, (state: RequirementState, { payload }) => ({
    ...state,
    requirements: {
      data: payload,
      loading: false,
      error: '',
    },
  })),
  on(getAllRequirementsError, (state: RequirementState, { payload }) => ({
    ...state,
    requirements: {
      data: [],
      loading: false,
      error: payload,
    },
  })),
  on(updateRequirementForm, (state: RequirementState, {payload}) => ({
    ...state,
    form: {
      ...state.form,
      values: {
        ...payload
      }
    }
  })),
  on(requirementFormSubmit, (state: RequirementState, {payload}) => ({
    ...state,
    form: {
      ...state.form,
      loading: true,
      error: '',
    }
  })),
  on(requirementFormSubmitSuccess, (state: RequirementState) => ({
    ...state,
    form: {
      ...state.form,
      loading: false,
      values: {
        description: '',
        title: '',
        typeID: '',
      }
    }
  })),
  on(requirementFormSubmitFailure, (state: RequirementState, {payload}) => ({
    ...state,
    form: {
      ...state.form,
      loading: false,
      error: payload,
      values: {
        description: '',
        title: '',
        typeID: '',
      }
    }
  }))
);
