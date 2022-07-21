import { STAFFS, DEPARTMENTS } from "../shared/Staff";
import { useEffect } from "react";

export const initialState = {
  staffs: [],
  department: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        staffs: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
