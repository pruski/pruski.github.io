import * as types from "./actionTypes";
import * as constants from './constants';
import {getUi} from './reducer';
import {fetchReposFromGithub} from './githubHelper';

export const error = () => ({
    type: types.ERROR
});

export const fetching = () => ({
    type: types.FETCHING
});

export const success = (repos) => ({
    type: types.SUCCESS, 
    repos
});

const shouldFetch = state => getUi(state) !== constants.SHOW_REPOS;

const fetch = async dispatch => {
    dispatch(fetching());

    try {
        dispatch(success(await fetchReposFromGithub()));
    }
    catch (e) {
        dispatch(error())
    }
};

export const fetchRepos = () => dispatch => fetch(dispatch);

export const fetchIfNeeded = () => (dispatch, getState) => {
    if(shouldFetch(getState())) {
        fetch(dispatch);
    }
};