import React, {Component} from 'react';
import {connect} from 'react-redux'
import {HorizontalLoader, ErrorMessage} from 'infrastructure';
import * as constants from './constants';
import * as actions from './actions';
import {selectedRepo} from './reducer';
import Repos from './repos';

@connect((state, {params: {repo}}) => ({...state.code, selectedRepo: selectedRepo(state.code, repo)}), actions)
class Code extends Component {
    componentDidMount() {
        this.props.fetchIfNeeded();
    }
    
    render() {
        const {ui, repos, fetchRepos, selectedRepo} = this.props;

        let component = null;

        switch(ui) {
            case constants.SHOW_LOADER:
                component = <HorizontalLoader />;
                break;

            case constants.SHOW_ERROR:
                component = (
                    <ErrorMessage>
                        Please <button onClick={() => fetchRepos()} className="btn btn-link btn-inline">try again</button>.
                    </ErrorMessage>
                );
                break;

            case constants.SHOW_REPOS:
                component = <Repos repos={repos} selected={selectedRepo}/>;
                break;
        }

        return component;
    }
}

export default Code;