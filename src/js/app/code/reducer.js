import * as actionTypes from './actionTypes';
import * as constnats from './constants';

const initialState = {
    ui: null,
    repos: []
};

const code = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING:
            return {
                ...state,
                ui: constnats.SHOW_LOADER
            };

        case actionTypes.SUCCESS:
            return {
                repos: action.repos,
                ui: constnats.SHOW_REPOS
            };

        case actionTypes.ERROR:
            return {
                ...state,
                ui: constnats.SHOW_ERROR
            };

        default:
            return state;
    }  
};

export default code;

export const selectedRepo = (state, id) => state.repos.filter(repo => repo.id === id)[0];