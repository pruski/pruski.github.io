import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from 'app/App';
import About from 'app/about/About';
import Code from 'app/code/Code';
import Contact from 'app/contact/Contact';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Redirect from="/" to="/about" />
                <Route name="about" path="/about" component={About} />
                <Route name="code" path="/code" component={Code} />
                <Route name="contact" path="/contact" component={Contact} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;