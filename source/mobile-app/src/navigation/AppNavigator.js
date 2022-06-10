import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
    AuthStack,
    TabsNavigator,
} from './MainNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    TabsNavigator,
},
    {
        initialRouteName: 'AuthLoading'
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
