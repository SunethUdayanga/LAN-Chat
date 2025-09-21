
import Login from '../../pages/Login/Login';
import DefaultLayout from '../../Layouts/DefaultLayout';
import { Route } from '../../types/router';

export const mainRoutes: Route[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: 'About'
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DefaultLayout
  }
];