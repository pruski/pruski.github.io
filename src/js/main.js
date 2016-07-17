import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import Root from 'infrastructure/Root';
import configureStore from 'configureStore';

const store = configureStore();
render(
    <Root store={store} />,
    document.getElementById('root')
);