import { combineReducers } from 'redux';
import mainNav from '../infrastructure/mainNav/';
import about from './about';
import contact from './contact';

const appState = combineReducers({
    about: about.reducer,
    contact: contact.reducer,
    mainNav: mainNav.reducer
});

export default appState;