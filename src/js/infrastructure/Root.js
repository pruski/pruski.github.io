import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import App from 'app/App';
import About from 'app/about';
import Code from 'app/code';
import Contact from 'app/contact';

const history = useRouterHistory(createHistory)({
    basename: '/'
});

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Route component={App}>
                <Redirect from="/" to="/about" />
                <Route name="about" path="/about" component={About} />
                <Route name="code" path="/code(/:repo)" component={Code} />
                <Route name="contact" path="/contact" component={Contact} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;