import React, {Component} from 'react';
import {connect} from 'react-redux'
import {HorizontalLoader, ErrorMessage} from 'infrastructure';
import * as constants from './constants';
import * as actions from './actions';

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
                component = (
                    <ErrorMessage>
                        Please <button onClick={() => fetchRepos()} className="btn btn-link btn-inline">try again</button>.
                    </ErrorMessage>
                );
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