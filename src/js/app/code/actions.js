import ReactGA from 'react-ga';
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
    ReactGA.event({
        category: 'Code',
        action: 'Fetching data'
    });

    dispatch(fetching());

    try {
        dispatch(success(await fetchReposFromGithub()));
    }
    catch (e) {
        ReactGA.event({
            category: 'Code',
            action: 'Fetching failed',
            label: e.message()
        });

        dispatch(error());
    }
};

export const fetchRepos = () => dispatch => fetch(dispatch);

export const fetchIfNeeded = () => (dispatch, getState) => {
    if(shouldFetch(getState())) {
        fetch(dispatch);
    }
};