import { createSelector } from '@ngrx/store';
import { FormState, TypeState, TypeStorage } from '../models/TypeState';

export const selectType = (state: any) => state.type;

export const selectFeatureList = createSelector(
  selectType,
  (state: TypeState) => state.list
);

export const selectFeatureForm = createSelector(
  selectType,
  (state: TypeState) => state.form
);

const selectForm = (state: TypeStorage) => state.type.form;

export const selectFormLoading = createSelector(
  selectForm,
  (state: FormState) => state.loading
)
