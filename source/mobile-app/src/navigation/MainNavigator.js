import React from 'react'
//import { colors } from '../common/theme'
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    DriverRating,
    ProfileScreen,
    PaymentDetails,
    RideListPage,
    MapScreen,
    BookedCabScreen,
    RegistrationPage,
    RideDetails,
    SearchScreen,
    EditProfilePage,
    AboutPage,
    OnlineChat,
    WalletDetails,
    AddMoneyScreen,
    SelectGatewayPage,
    LoginScreen,
    IntroScreen,
    DriverTrips,
    WithdrawMoneyScreen,
    DriverIncomeScreen,
    ConvertDriver,
    Notifications,
} from '../screens';
// import SideMenu from '../components/SideMenu';
// import SideMenuRTL from '../components/SideMenuRTL';
//import Constants from 'expo-constants'

const AppNavigator = createStackNavigator()
export const AppStack = () => 
    <AppNavigator.Navigator>
        <AppNavigator.Screen name="DriverRating" component={DriverRating} />
        <AppNavigator.Screen name="RideList" component={RideListPage} />
        <AppNavigator.Screen name="DriverTrips" component={DriverTrips} />
        <AppNavigator.Screen name="Profile" component={ProfileScreen} />
        <AppNavigator.Screen name="PaymentDetails" component={PaymentDetails} />
        <AppNavigator.Screen name="About" component={AboutPage} />
        <AppNavigator.Screen name="Map" component={MapScreen} />
        <AppNavigator.Screen name="onlineChat" component={OnlineChat} />
        <AppNavigator.Screen name="BookedCab" component={BookedCabScreen} />
        <AppNavigator.Screen name="MyEarning" component={DriverIncomeScreen} />
        <AppNavigator.Screen name="RideDetails" component={RideDetails} />
        <AppNavigator.Screen name="Search" component={SearchScreen} />
        <AppNavigator.Screen name="editUser" component={EditProfilePage} />
        <AppNavigator.Screen name="wallet" component={WalletDetails} />
        <AppNavigator.Screen name="addMoney" component={AddMoneyScreen} />
        <AppNavigator.Screen name="withdrawMoney" component={WithdrawMoneyScreen} />
        <AppNavigator.Screen name="paymentMethod" component={SelectGatewayPage} />
        <AppNavigator.Screen name="Convert" component={ConvertDriver} />
        <AppNavigator.Screen name="Notifications" component={Notifications} />
    </AppNavigator.Navigator>


const AuthNavigator = createStackNavigator()
export const AuthStack = () =>
    <AuthNavigator.Navigator  screenOptions={{
        headerShown: false,
    }}> 
       <AuthNavigator.Screen name="Intro" component={IntroScreen} />
       <AuthNavigator.Screen name="Reg" component={RegistrationPage} />
       <AuthNavigator.Screen name="Login" component={LoginScreen} />
    </AuthNavigator.Navigator>

//drawer routes, you can add routes here for drawer or sidemenu
// const DrawerRoutes = {
//     'Map': {
//         name: 'Map',
//         screen: createStackNavigator(AppStack, {
//             initialRouteName: 'Map',
//             navigationOptions: {
//                 headerShown: false
//             }
//         })
//     },
//     'RideList': {
//         name: 'RideList',
//         screen: createStackNavigator(AppStack, { initialRouteName: 'RideList', headerMode: 'none' })
//     },
//     'DriverTrips': {
//         name: 'DriverTrips',
//         screen: createStackNavigator(AppStack, { initialRouteName: 'DriverTrips', headerMode: 'none' })
//     },
//     'Profile': {
//         name: 'Profile',
//         screen: createStackNavigator(AppStack, { initialRouteName: 'Profile', headerMode: 'none' })
//     },
//     'About': {
//         name: 'About',
//         screen: createStackNavigator(AppStack, { initialRouteName: 'About', headerMode: 'none' })
//     },
//     'wallet': {
//         name: 'wallet',
//         screen: createStackNavigator(AppStack, { initialRouteName: 'wallet', headerMode: 'none' })
//     },
//     'MyEarning': {
//         name: 'MyEarning',
//         screen: createStackNavigator(AppStack, { initialRouteName: 'MyEarning', headerMode: 'none' })
//     },
//     'Convert': {
//         name: 'Convert',
//         screen: createStackNavigator(AppStack, { initialRouteName: 'Convert', headerMode: 'none' })
//     },
//     'Notifications': {
//         name: 'Notifications',
//         screen: createStackNavigator(AppStack, { initialRouteName: 'Notifications', headerMode: 'none' })
//     },

// };

// //main navigator for user end
// export const RightRiderRootNavigator = createDrawerNavigator(
//     DrawerRoutes,
//     {
//         drawerPosition: 'right',
//         drawerWidth: 240,
//         initialRouteName: 'Map',
//         contentComponent: SideMenuRTL,
//     });

// export const LeftRiderRootNavigator = createDrawerNavigator(
//     DrawerRoutes,
//     {
//         drawerPosition: 'left',
//         drawerWidth: 240,
//         initialRouteName: 'Map',
//         contentComponent: SideMenu,
//     });


// export const RightDriverRootNavigator = createDrawerNavigator(
//     DrawerRoutes,
//     {
//         drawerPosition: 'right',
//         drawerWidth: 240,
//         initialRouteName: 'DriverTrips',
//         contentComponent: SideMenuRTL,
//     });

// export const LeftDriverRootNavigator = createDrawerNavigator(
//     DrawerRoutes,
//     {
//         drawerPosition: 'left',
//         drawerWidth: 240,
//         initialRouteName: 'DriverTrips',
//         contentComponent: SideMenu,
//     });