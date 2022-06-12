export interface Requirement {
  requirementID: number;
  title: string;
  description: string;
  type: {
    typeID: number;
    typeName: string;
  };
}

export interface RequirementStorage {
  requirement: RequirementState;
}

export interface RequirementState {
  requirements: {
    data: Requirement[];
    loading: boolean;
    error: string;
  };
  form: RequirementForm;
}

export interface RequirementForm {
  title: string;
  description: string;
  typeID: string;
}

export const initialState: RequirementState = {
  form: {
    description: '',
    title: '',
    typeID: '',
  },
  requirements: {
    data: [],
    error: '',
    loading: false,
  },
};
