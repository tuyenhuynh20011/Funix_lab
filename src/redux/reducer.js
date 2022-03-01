import {STAFFS} from '../shared/staffs';
import {DEPARTMENTS} from '../shared/staffs';
export const initialState = {
    staffs: STAFFS,
    department: DEPARTMENTS,
};

export const Reducer = (state = initialState, action) => {
    return state;
};