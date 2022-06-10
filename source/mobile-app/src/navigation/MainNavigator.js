import React from 'react'
import { colors } from '../common/theme'
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
    FoodDeliveryScreen,
    FoodProductScreen,
    FoodVenueScreen,
    FoodCartScreen,
    HomeScreen,
} from '../screens';
import SideMenu from '../components/SideMenu';
import SideMenuRTL from '../components/SideMenuRTL';
import Constants from 'expo-constants'
import FoodCategoryScreen from '../screens/FoodCategoryScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FansFeedScreen from 'screens/FansFeedScreen'
import FansProfileScreen from 'screens/FansProfileScreen'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//app stack for user end
export const AppStack = {
    DriverRating: {
        screen: DriverRating,
        navigationOptions: {
            headerShown: false,
        }
    },

    RideList: {
        screen: RideListPage,
        navigationOptions: {
            headerShown: false,
        }
    },

    DriverTrips: {
        screen: DriverTrips,
        navigationOptions: {
            headerShown: false
        }
    },

    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    PaymentDetails: {
        screen: PaymentDetails,
        navigationOptions: {
            headerShown: false
        }
    },

    About: {
        screen: AboutPage,
        navigationOptions: {
            headerShown: false
        }
    },

    Map: {
        screen: MapScreen,
        navigationOptions: {
            headerShown: true,
            title: Constants.manifest.name || '123',
            headerStyle: {
                backgroundColor: colors.BACKGROUND,
            },
            headerTitleStyle: {
                color: colors.BUTTON_ORANGE,
            }
        }
    },

    onlineChat: {
        screen: OnlineChat,
        navigationOptions: {
            headerShown: false
        }
    },

    BookedCab: {
        screen: BookedCabScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    MyEarning: {
        screen: DriverIncomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    RideDetails: {
        screen: RideDetails,
        navigationOptions: {
            headerShown: false
        }
    },

    Search: {
        screen: SearchScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    editUser: {
        screen: EditProfilePage,
        navigationOptions: {
            headerShown: false
        }
    },

    wallet: {
        screen: WalletDetails,
        navigationOptions: {
            headerShown: false
        }

    },

    addMoney: {
        screen: AddMoneyScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    withdrawMoney: {
        screen: WithdrawMoneyScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    paymentMethod: {
        screen: SelectGatewayPage,
        navigationOptions: {
            headerShown: false
        }
    },

    Convert: {
        screen: ConvertDriver,
        navigationOptions: {
            headerShown: false
        }
    },

    Notifications: {
        screen: Notifications,
        navigationOptions: {
            headerShown: false
        }
    },

    FoodDelivery: {
        screen: FoodDeliveryScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    FoodVenue: {
        screen: FoodVenueScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    FoodCategory: {
        screen: FoodCategoryScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    FoodProduct: {
        screen: FoodProductScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    FoodCart: {
        screen: FoodCartScreen,
        navigationOptions: {
            headerShown: false
        }
    },

    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    }
}

//authentication stack for user before login
export const AuthStack = createStackNavigator({
    Reg: {
        screen: RegistrationPage,
        navigationOptions: {
            headerShown: false,
        }
    },
    Intro: {
        screen: IntroScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    }
}, {
    initialRouteName: 'Intro',
});

const Stack = createNativeStackNavigator();

const FoodDeliveryNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="FoodDelivery" component={FoodDeliveryScreen} />
            <Stack.Screen name="FoodCategory" component={FoodCategoryScreen} />
            <Stack.Screen name="FoodProduct" component={FoodProductScreen} />
            <Stack.Screen name="FoodCart" component={FoodCartScreen} />
        </Stack.Navigator>
    )
}

const FansFeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="FansFeedScreen" component={FansFeedScreen} />
        </Stack.Navigator>
    )
}

const FansProfileNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="FansProfileScreen" component={FansProfileScreen} />
        </Stack.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Map"
            drawerContent={(props) => <SideMenu {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="Map" component={MapScreen} />
            <Drawer.Screen name="RideList" component={RideListPage} />
            <Drawer.Screen name="DriverTips" component={DriverTrips} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="About" component={AboutPage} />
            <Drawer.Screen name="wallet" component={WalletDetails} />
            <Drawer.Screen name="MyEarning" component={DriverIncomeScreen} />
            <Drawer.Screen name="Convert" component={ConvertDriver} />
            <Drawer.Screen name="Notifications" component={Notifications} />
            <Drawer.Screen name="editUser" component={EditProfilePage} />
        </Drawer.Navigator>
    )
}


export const TabsNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: colors.BACKGROUND,
                        height: 100,
                    },
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = "circle";

                        if (route.name === 'Delivery') {
                            iconName = focused
                                ? 'motorcycle'
                                : 'motorcycle';
                        }
                        if (route.name === 'Taxi') {
                            iconName = focused
                                ? 'taxi'
                                : 'taxi';

                        }
                        return <FontAwesome name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: colors.BRANDING,
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen
                    name="Delivery"
                    component={FoodDeliveryNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Taxi"
                    component={DrawerNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="FansFeed"
                    component={FansFeedNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Fans"
                    component={FansProfileNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}