import { combineReducers } from 'redux';
import {reducer as about} from './about';
import {reducer as contact} from './contact';
import {reducer as code} from './code'

const appState = combineReducers({
    about,
    contact,
    code
});

export default appState;