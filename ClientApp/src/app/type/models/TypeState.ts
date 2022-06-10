import { Type } from './Type';

export interface TypeState {
  list: ListState;
  form: FormState;
}

export interface ListState {
  loading: boolean;
  data: Type[];
}

export interface FormState {
  loading: boolean;
  data: TypeForm;
}

export interface TypeForm {
  typeName: string;
}
