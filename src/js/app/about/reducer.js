import { combineReducers } from 'redux';
import cvDownloader from './cvDownloader';

const initialState = {};

const about = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    about,
    cvDownloader: cvDownloader.reducer
});