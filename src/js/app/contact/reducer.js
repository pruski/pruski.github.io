import { combineReducers } from 'redux';
import contactForm from './contactForm';

const initialState = {};

const contact = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    contact,
    contactForm: contactForm.reducer
});