import React from 'react';
import Register from '../pages/Register';
import Login from '../pages/Login';

type Route = {
  name: string;
  component: React.ComponentType;
  options?: {};
};

const routes: Route[] = [
  {
    name: 'Register',
    component: Register,
    options: {
      headerTransparent: true,
      headerTitle: 'voltar',
      // headerLeft: ({ }) => <ButtonBack />,
    },
  },
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
    },
  },
];

export { routes };
