import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from 'views/pages/Register';
import { InitialSkeleton } from '../../views/pages/InitialSkeleton';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="InitialSkeleton">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="InitialSkeleton" component={InitialSkeleton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
