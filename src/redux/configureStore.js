import {createStore, combineReducers, applyMiddleware } from 'redux';
import {staffs} from './Staffs';
import { departments } from './departments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           staffs:staffs,
           departments:departments
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}