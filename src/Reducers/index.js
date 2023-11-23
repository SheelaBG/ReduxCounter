import {combineReducers} from 'redux';
import changeNumber from './UpDown';

const rootReducers=combineReducers({changeNumber});//pass as a object within combine reducers

export default rootReducers;