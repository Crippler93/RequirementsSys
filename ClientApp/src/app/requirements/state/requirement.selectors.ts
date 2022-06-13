import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RequirementState, RequirementStorage,  } from './requirements.state';

const selectRequirementFeature = createFeatureSelector<RequirementStorage, RequirementState>('requirement');

export const selectRequirement = createSelector(
  selectRequirementFeature,
  (state: RequirementState) => state
)
