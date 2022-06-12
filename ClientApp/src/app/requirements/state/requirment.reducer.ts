import { createReducer, on } from '@ngrx/store';

import { initialState, RequirementState } from './requirements.state';
import {
  getAllRequirements,
  getAllRequirementsError,
  getAllRequirementsSuccess,
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
  }))
);
