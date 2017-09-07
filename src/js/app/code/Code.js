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
        
        switch(ui) {
            case constants.SHOW_LOADER:
            case constants.SHOW_ERROR:
                return (
                    <ErrorMessage>
                        Unfortunately a third party service is down. For the time being, please visit <a href="https://github.com/pruski">my GitHub profile</a> to view code samples.
                    </ErrorMessage>
                );

            case constants.SHOW_REPOS:
                return <Repos repos={repos} selected={selectedRepo}/>;

            default:
                return null;
        }
    }
}

export default Code;
