import React from 'react';
import Register from '../pages/Register';
import Button from '../components/elements/Button';
import Navigation from '../commons/utils/useNavigation';
import ButtonBack from './utils/useButtonGoBack';

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
      // headerShown: false,

      headerTitle: 'voltar',
      // headerLeft: ({ }) => <ButtonBack />,
    },
  },
];

export { routes };
