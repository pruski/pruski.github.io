import { combineReducers } from 'redux';
import about from './about';
import contact from './contact';
import code from './code'

const appState = combineReducers({
    about: about.reducer,
    contact: contact.reducer,
    code: code.reducer
});

export default appState;