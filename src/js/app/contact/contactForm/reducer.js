import * as actionTypes from './actionTypes';
import * as validators from './validators';
import formConfig, {getField} from './formConfig'

const initialState = {
    valid: false,
    fields: formConfig.reduce((all, field) => ({
        ...all,
        [field.id]: {
            value: '',
            valid: validators[field.validation.type]('')
        }
    }), {})
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_FIELD_VALUE:
            const fields = {
                ...state.fields,
                [action.id]: {
                    valid: validators[getField(action.id).validation.type](action.value),
                    value: action.value
                }
            };

            return {
                fields,
                valid: formConfig.reduce((result, field) => result && fields[field.id].valid, true)
            };

        case actionTypes.RESET_FIELD_VALUES:
            return initialState;

        default:
            return state;
    }
};