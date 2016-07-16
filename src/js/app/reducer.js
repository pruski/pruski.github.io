import { combineReducers } from 'redux';
import about from './about';
import contact from './contact';

const appState = combineReducers({
    about: about.reducer,
    contact: contact.reducer
});

export default appState;