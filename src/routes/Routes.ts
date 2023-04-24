import React from 'react';
import Register from '../pages/Register';
// import {  } from 'react-native-screens';

type Route = {
  name: string;
  component: React.ComponentType;
  options?: {};
};

const routes: Route[] = [
  {
    name: 'Register',
    component: Register,
    options: { headerShown: true },
  },
];

export { routes };
