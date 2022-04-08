import React from 'react'
import {
    useWindowDimensions,
    TouchableOpacity,
    Animated,
    StyleSheet,
    View,
} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { SafeAreaView } from 'react-navigation'
import TaxiScreen from './Tabs/TaxiTab'
import DeliveryScreen from './Tabs/DeliveryTab'
import FoodDeliveryScreen from './Tabs/FoodDeliveryTab'
import FormalitiesScreen from './Tabs/FormalitiesTab'
import { colors } from '../../common/theme';

export default function MapScreen(props) {
    const layout = useWindowDimensions()

    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'first', title: 'Taxi' },
        { key: 'second', title: 'Delivery' },
        { key: 'third', title: 'Comidas' },
        { key: 'fourth', title: 'Tramites' },
    ])
    
    const renderScene = SceneMap({
        first: () => (
            <TaxiScreen navigation={props.navigation} />
        ),
        second: () => (
            <DeliveryScreen navigation={props.navigation} />
        ),
        third: () => (
            <FoodDeliveryScreen navigation={props.navigation} />
        ),
        fourth: () => (
            <FormalitiesScreen navigation={props.navigation} />
        ),
    })

    const renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
    
        return (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
              const opacity = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex) =>
                  inputIndex === i ? 1 : 0.5
                ),
              });
    
              return (
                <TouchableOpacity
                  style={styles.tabItem}
                  onPress={() => setIndex(i)}>
                  <Animated.Text style={{ opacity, color: colors.WHITE }}>{route.title}</Animated.Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      };

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      backgroundColor: colors.BACKGROUND
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
  });