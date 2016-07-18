import React from 'react';
import RepoList from './repoList';
import RepoDetails from './repoDetails';

export default ({repos, selected}) => (
    <div className="repos">
        <RepoList repos={repos}/>
        <RepoDetails details={selected}/>
    </div>
);
