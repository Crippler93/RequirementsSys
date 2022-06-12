import { createAction, props } from '@ngrx/store';
import { Requirement, RequirementForm } from './requirements.state';

export enum requirementsActions {
  GET_ALL_REQUIREMENTS = 'REQUIREMENTS GET_ALL_REQUIREMENTS',
  GET_ALL_REQUIREMENTS_SUCCESS = 'REQUIREMENTS GET_ALL_REQUIREMENTS_SUCCESS',
  GET_ALL_REQUIREMENTS_ERROR = 'REQUIREMENTS GET_ALL_REQUIREMENTS_ERROR',
  REQUIREMENT_FORM_UPDATE = 'REQUIREMENT_FORM_UPDATE',
  REQUIREMENT_FORM_CLEAN = 'REQUIREMENT_FORM_CLEAN',
}

export const getAllRequirements = createAction(
  requirementsActions.GET_ALL_REQUIREMENTS
);
export const getAllRequirementsSuccess = createAction(
  requirementsActions.GET_ALL_REQUIREMENTS_SUCCESS,
  props<{ payload: Requirement[] }>()
);
export const getAllRequirementsError = createAction(
  requirementsActions.GET_ALL_REQUIREMENTS_ERROR,
  props<{ payload: string }>()
);

export const updateRequirementForm = createAction(
  requirementsActions.REQUIREMENT_FORM_UPDATE,
  props<{ payload: RequirementForm }>()
);

export const cleanRequirementForm = createAction(
  requirementsActions.REQUIREMENT_FORM_CLEAN
);
