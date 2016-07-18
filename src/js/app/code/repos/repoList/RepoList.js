import React from 'react';
import {Link} from 'react-router';

export default ({repos}) => (
    <ul className="repo-list">
        {repos.map(repo => {
            const icon = repo.parent ? 'octicon-repo-forked' : 'octicon-repo';

            return (
                <li key={repo.name}>
                    <span className={'octicon ' + icon}></span>

                    <Link to={'/code/' + repo.id}>
                        {repo.name}
                    </Link>
                </li>
            )
        })}
    </ul>
);