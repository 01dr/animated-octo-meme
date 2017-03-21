/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 06.02.17
 */

import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Root from './containers/root';

import './index.html';

render(
    <Root store={store}/>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/root/index', () => {
        const NewRoot = require('./containers/root/index').default;
        render(
            <NewRoot store={store}/>,
            document.getElementById('root')
        );
    });
}