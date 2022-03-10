import * as ActionTypes from './ActionTypes';

export const departments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENTS:
      return {...state, isLoading: false, errMess: null, dishes: action.payload};
    case ActionTypes.DEPARTMENTS_FAILED:
      return {...state, errMess: action.payload};
      case ActionTypes.DEPARTMENTS_LOADING:
        return {...state, isLoading: true, errMess: null, staffs: []}
    default:
      return state;
  }
};