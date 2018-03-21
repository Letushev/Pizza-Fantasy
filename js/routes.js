import PizzasQueue from './components/PizzasQueue';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

const routes = [

  {
    href: '/',
    component: PizzasQueue
  },

  {
    href: '/login',
    component: LogIn
  },

  {
    href: '/signup',
    component: SignUp
  }

];

export default routes;
