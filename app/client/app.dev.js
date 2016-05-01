/**
 * ReactClient
 * app startup script for development purpose
 */

/* eslint no-process-env:0 */
console.log('NODE_ENV:', process.env.NODE_ENV);

require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

// those files are aliased in `config/webpack.config.js`
// they actually import `{fileName}-dev.js`
import { Main } from 'utils/main';
import { makeStore } from 'utils/store';

import initialState from 'fixtures/initial-state-dev.fixture';
import App from 'containers/App';

var appStore;

export function start(targetEl) {

    // build the app' store and reference it to the module
    appStore = makeStore(initialState);

    ReactDOM.render((
        <Main
            app={App}
            store={appStore} />
    ), targetEl);

    // automatically fake todos
    setTimeout(fakeTodos, 250);
}

export function dispatch(action) {
    appStore.dispatch(action);
}

export function fakeTodos() {
    var Storage = require('services/storage-service');
    var getTodos = require('fixtures/todos.fixture').getTodos;
    Storage.init()
    .then(() => Storage.getItem('items', []))
    .then(items => {
        if (!items.length) {
            return Storage.setItem('items', getTodos());
        }
    });
}
