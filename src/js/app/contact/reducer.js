import { combineReducers } from 'redux';
import {reducer as contactForm} from './contactForm';
import * as actionTypes from './actionTypes';
import * as constnats from './constants';

const initialState = constnats.SHOW_FORM;

const contact = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SENDING:
            return constnats.SHOW_LOADER;

        case actionTypes.SUCCESS:
            return constnats.SHOW_SUCCESS_MESSAGE;

        case actionTypes.ERROR:
            return constnats.SHOW_ERROR_MESSAGE;

        case actionTypes.RESET:
            return initialState;

        default:
            return state;
    }
};

export default combineReducers({
    contact,
    contactForm
});