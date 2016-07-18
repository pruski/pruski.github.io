import React from 'react';
import {Link, withRouter} from 'react-router';

export default withRouter(({repos, router: {isActive}}) => (
    <ul className="repo-list">
        {repos.map(repo => (
            <li key={repo.name} className={isActive('code/' + repo.id) ? 'active' : ''}>
                <span className={'octicon ' + (repo.parent ? 'octicon-repo-forked' : 'octicon-repo')}></span>

                <Link to={'/code/' + repo.id}>
                    {repo.name}
                </Link>
            </li>
        ))}
    </ul>
));