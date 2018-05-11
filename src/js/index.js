'use strict';

require('../images/favicon.ico');

import '../sass/main.scss';

import Router from './framework/Router';
import routes from './routes';

const rootEl = document.getElementById('root');
const ROUTER = new Router(rootEl, routes);