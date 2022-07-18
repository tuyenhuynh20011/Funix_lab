import {createStore} from 'redux'
import rootReducer from './reducer'
import logger from './logger'
const store = createStore(logger(rootReducer))
export default store

