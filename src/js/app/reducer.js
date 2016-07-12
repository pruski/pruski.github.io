import { combineReducers } from 'redux';
import mainNav from '../infrastructure/mainNav/';
import about from './about';

const appState = combineReducers({
    about: about.reducer,
    mainNav: mainNav.reducer
});

export default appState;