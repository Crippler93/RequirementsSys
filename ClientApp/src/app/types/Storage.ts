import { RequirementState } from "../requirements/state/requirements.state";
import { TypeState } from "../type/models/TypeStorage";

export default interface AppStorage {
  requirement: RequirementState,
  type: TypeState
}
