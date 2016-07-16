import { combineReducers } from 'redux';
import cvDownloader from './cvDownloader';
import * as actionTypes from './actionTypes';

const initialState = {
    frameLoaded: false
};

const about = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_FRAME_LOAD:
            return {
                frameLoaded: true
            };

        case actionTypes.RESET_STATE:
             return initialState;
        
        default:
            return state;
    }
};

export default combineReducers({
    about,
    cvDownloader: cvDownloader.reducer
});