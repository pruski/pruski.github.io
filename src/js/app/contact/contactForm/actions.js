import * as actionTypes from './actionTypes';
import { address } from './constants';
import 'whatwg-fetch';

export const onUpdateField = (id, value) => ({
    type: actionTypes.UPDATE_FIELD_VALUE,
    value,
    id
});

export const resetFields = () => ({
    type: actionTypes.RESET_FIELD_VALUES
});