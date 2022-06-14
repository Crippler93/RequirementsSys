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
  form: {
    values: RequirementForm;
    loading: boolean;
    error: string;
  };
}

export interface RequirementForm {
  title: string;
  description: string;
  typeID: string;
}

export const initialState: RequirementState = {
  form: {
    values: {
      description: '',
      title: '',
      typeID: '',
    },
    error: '',
    loading: false
  },
  requirements: {
    data: [],
    error: '',
    loading: false,
  },
};
