import React, {Component} from 'react';
import {ErrorMessage} from 'infrastructure';
import RepoList from './repoList';
import RepoDetails from './repoDetails';

class Repos extends Component {
    render() {
        const {repos, selected} = this.props;

        return (
            <div className="repos">
                <RepoList repos={repos}/>
                <RepoDetails details={selected}/>
            </div>
        );
    }
}

export default Repos;
