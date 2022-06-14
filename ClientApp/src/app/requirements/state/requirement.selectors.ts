import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';


import AppStorage from 'src/app/types/Storage';
import { TypeState } from 'src/app/type/models/TypeStorage';
import { RequirementForm, RequirementState, RequirementStorage } from './requirements.state';

const selectRequirementFeature = createFeatureSelector<RequirementStorage, RequirementState>('requirement');

const getRequirementForm = (state: RequirementStorage): RequirementForm => state.requirement.form.values;

const selectTypeFeature =  createFeatureSelector<AppStorage, TypeState>('type');

export const selectRequirement = createSelector(
  selectRequirementFeature,
  (state: RequirementState) => state
)

export const selectRequirementForm = createSelector(
  getRequirementForm,
  (form) => form
)

export const selectTypeList = createSelector(
  selectTypeFeature,
  (state) => state.list.data
)
