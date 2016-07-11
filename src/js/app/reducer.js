import { combineReducers } from 'redux';
import mainNav from '../infrastructure/mainNav/';

const appState = combineReducers({
    mainNav: mainNav.reducer
});

export default appState;