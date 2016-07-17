import React, {Component} from 'react';
import {connect} from 'react-redux'
import HorizontalLoader from 'infrastructure/horizontalLoader/HorizontalLoader';
import * as constants from './constants';
import * as actions from './actions';
import ErrorMessage from './errorMessage/ErrorMessage';

@connect(state => state.code, actions)
class Code extends Component {
    componentDidMount() {
        this.props.fetchIfNeeded();
    }
    
    render() {
        const {ui, repos, fetchRepos} = this.props;

        let component = null;

        switch(ui) {
            case constants.SHOW_LOADER:
                component = <HorizontalLoader />;
                break;

            case constants.SHOW_ERROR:
                component = <ErrorMessage onRetryClick={() => fetchRepos()} />;
                break;

            case constants.SHOW_PROJECTS:
                component = (
                    <ul>
                        {repos.map(repo => <li key={repo.name}>{repo.name}</li>)}
                    </ul>
                );
                break;
        }

        return component;
    }
}

export default Code;