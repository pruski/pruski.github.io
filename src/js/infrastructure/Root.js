import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from '../app/App';
import About from '../app/about/About';
import Projects from '../app/projects/Projects';
import Contact from '../app/contact/Contact';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Redirect from="/" to="/about" />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;