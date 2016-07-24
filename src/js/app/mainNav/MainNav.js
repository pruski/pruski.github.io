import React, {Component} from 'react';
import {Link, withRouter} from 'react-router';
import {routes} from './constants';

class MainNav extends Component {
    onRouteChange() {
        this.forceUpdate();
    }

    render() {
        const {router} = this.props;

        return (
            <nav className="main-nav">
                <ul>
                    {routes.map(route =>(
                            <li key={route} className={router.isActive(route) ? 'active' : ''}>
                                <Link to={route} onClick={() => this.onRouteChange()}>
                                    {route}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        )
    }
}

export default withRouter(MainNav);