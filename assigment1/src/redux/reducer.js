import { STAFFS, DEPARTMENTS } from "../shared/Staff";
import { useEffect } from "react";

export const initialState = {
  staffs:[
    {
      name:123
    }
  ],
  department: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        staffs:action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
