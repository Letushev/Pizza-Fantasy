import Queue from './components/Queue';
import Login from './components/Login';
import Signup from './components/Signup';

const routes = [

  {
    href: '',
    redirectTo: '/'
  },

  {
    href: '/',
    component: Queue
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
