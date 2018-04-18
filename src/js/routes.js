import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Order from './Order';
import Queue from './Queue';

const routes = [

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
    component: Order
  },

  {
    href: '/queue',
    component: Queue
  }
  
];

export default routes;