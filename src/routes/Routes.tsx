import React from 'react';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { theme } from '../commons/styles/theme';
import Arrow from '../assets/icons/arrowLeft.svg';
import Button from '../components/elements/Button';
import { Stack } from '.';

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'Register',
    component: Register,
    options: {
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: theme.palette.colors.white.main,
      },
      headerTitle: 'Voltar',
      headerTitleStyle: {
        fontSize: 15,
        fontFamily: theme.typography.regular,
      },
      headerLeft: ({ }) => (
        <Button variant="text" height="auto" width="50px">
          <Arrow width={22} height={22} />
        </Button>
      ),
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
