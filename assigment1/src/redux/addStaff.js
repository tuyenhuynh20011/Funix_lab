const formStaff = {
  newstaff: [],
};
export const AddStaffs = (state = formStaff, action) => {
  switch (action.type) {
    case "SET_STAFF":
      return {
        ...state,newstaff:action.payload
      };
      case "ADD_STAFF":
        var comment = action.payload;
        return {...state, newstaff: state.newstaff.concat(comment)};
    default:
      return state;
  }
};
