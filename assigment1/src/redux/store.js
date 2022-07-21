import { applyMiddleware, createStore,combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import {AddStaffs} from '../redux/addStaff';
const store = createStore(combineReducers({rootReducer,AddStaffs}),

applyMiddleware(thunk, createLogger()));
export default store

