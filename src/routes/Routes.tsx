import React from 'react';
import Register from '../pages/Register';

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
];

export { routes };
