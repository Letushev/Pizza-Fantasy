import routes from './routes';
import Router from './framework/Router';

const router = new Router(routes);

window.addEventListener('error', e => {
  console.log(e);
});
