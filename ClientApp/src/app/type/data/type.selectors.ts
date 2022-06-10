import { createSelector } from '@ngrx/store';
import { ListState, TypeState } from '../models/TypeState';

export const selectList = (state: any) => state.type;

export const selectFeatureList = createSelector(
  selectList,
  (state: TypeState) => state.list
);
