import * as actionTypes from './actionTypes';

const initialState = {
    renderMessage: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DOWNLOAD_CLICKED:
            return {
                ...state,
                renderMessage: true
            };

        default:
            return state;
    }
};