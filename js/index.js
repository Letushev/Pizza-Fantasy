import routes from './routes';
import Router from './framework/Router';

const router = new Router(routes);

document.getElementById('root').appendChild(router.host);