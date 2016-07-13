import * as actionTypes from './actionTypes';

export const onUpdateField = (id, value) => ({
    type: actionTypes.UPDATE_FIELD_VALUE,
    value,
    id
});

export const resetFields = () => ({
    type: actionTypes.RESET_FIELD_VALUES
});