import * as actionTypes from './actionTypes';
import { formConfig } from './constants'

const initialState = {
    sendable: false,
    values: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_FIELD_VALUE:
            const values = {
                ...state.values,
                [action.id]: action.value
            };

            return {
                values,
                sendable: formConfig.reduce((result, field) => result && values[field.id] && values[field.id].length >= 3, true)
            };

        default:
            return state;
    }
};