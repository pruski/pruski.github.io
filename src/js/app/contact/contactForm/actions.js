import * as actionTypes from './actionTypes';
import { address } from './formConfig';

export const onUpdateField = (id, value) => ({
    type: actionTypes.UPDATE_FIELD_VALUE,
    value,
    id
});

export const resetFields = () => ({
    type: actionTypes.RESET_FIELD_VALUES
});

export const validate = () => ({
    type: actionTypes.VALIDATE_FORM
});