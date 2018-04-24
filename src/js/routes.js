import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Order from './Order';
import Queue from './Queue';
import AUTH_SERVICE from './api/auth-service';

const routes = [

  {
    href: '',
    redirectTo: '/queue'
  },

  {
    href: '/',
    redirectTo: '/queue'
  },

  {
    href: '/login',
    component: Login
  },

  {
    href: '/signup',
    component: Signup
  },

  {
    href: '/order',
    component: Order,
    isAuthorized: AUTH_SERVICE.isAuthorized
  },

  {
    href: '/queue',
    component: Queue,
    isAuthorized: AUTH_SERVICE.isAuthorized
  }
  
];

export default routes;