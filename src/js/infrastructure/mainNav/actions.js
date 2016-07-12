import * as actionTypes from './actionTypes';

export const navigate = url => ({
    type: actionTypes.NAVIGATE,
    url
});