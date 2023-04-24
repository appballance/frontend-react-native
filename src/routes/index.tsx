import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './Routes';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        {routes.map((route, index) => (
          <Stack.Screen
            key={index}
            {...route}
            name={route.name}
            options={route.options}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
