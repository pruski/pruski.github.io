import React from 'react';
import {Link, withRouter} from 'react-router';

export default withRouter(({repos, router: {isActive, push}}) => {
    let options  = [],
        selected;

    return (
        <div>
            <ul className="repo-list">
                {repos.map(repo => {
                    options.push(<option key={repo.name} value={repo.id}>{repo.name}</option>);

                    if(isActive('code/' + repo.id)) {
                        selected = repo;
                    }

                    return (
                        <li key={repo.name} className={isActive('code/' + repo.id) ? 'active' : ''}>
                            <span className={'octicon ' + (repo.parent ? 'octicon-repo-forked' : 'octicon-repo')}></span>

                            <Link to={'/code/' + repo.id}>
                                {repo.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="repo-selector">
                <select defaultValue={selected}
                        onChange={(e) => push('code/' + e.target.value)}
                        className="form-control">
                    <option value="">Please select a project</option>
                    {options}
                </select>
            </div>
        </div>
    )
});