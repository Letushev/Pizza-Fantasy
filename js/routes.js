import Queue from './components/Queue';
import Login from './components/Login';
import Signup from './components/Signup';

import AUTH_SERVICE from './services/AuthService';

const routes = [

  {
    href: '',
    redirectTo: '/'
  },

  {
    href: '/',
    component: Queue,
    isAuthorized: AUTH_SERVICE.isAuthorized
  },

  {
    href: '/login',
    component: Login
  },

  {
    href: '/signup',
    component: Signup
  }

];

export default routes;
