import { NavigationContainer } from '@react-navigation/native';
import {
    AuthStack,
    // RightRiderRootNavigator,
    // LeftRiderRootNavigator,
    // RightDriverRootNavigator,
    // LeftDriverRootNavigator
} from './MainNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
          <Stack.Screen name="Auth" component={AuthStack} />
          {/* <Stack.Screen name="RightRiderRoot" component={RightRiderRootNavigator} />
          <Stack.Screen name="LeftRiderRoot" component={LeftRiderRootNavigator} />
          <Stack.Screen name="RightDriverRoot" component={RightDriverRootNavigator} />
          <Stack.Screen name="LeftDriverRoot" component={LeftDriverRootNavigator} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
