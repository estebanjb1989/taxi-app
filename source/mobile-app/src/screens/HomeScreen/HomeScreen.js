
import React, { useState, useEffect, useContext } from 'react'
import {
    FlatList,
    Text,
    SafeAreaView,
    Image,
} from 'react-native'
import { FirebaseContext } from 'common/src';
import { Container } from 'components'
import { useSelector } from 'react-redux'
import { colors } from '../../common/theme'
import styles from './styles'

export default function HomeScreen({ navigation }) {
    const cart = useSelector(state => state.deliverydata.cart)
    
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <Container flex alignCenter spaceBetween>
                <Container
                    style={styles.taxiContainer}
                    onPress={() => { navigation.navigate('Map') }}
                    justifyEnd
                >
                    <Text style={styles.text}>Quiero pedir un taxi</Text>
                </Container>
                <Container
                    style={styles.foodContainer}
                    onPress={() => { navigation.navigate('FoodDelivery') }}
                    spaceBetween
                >   
                    {!!cart?.items?.length ? (
                        <Text>PEDIDO EN CURSO</Text>
                    ) : (
                        <Text>CARRITO VACIO</Text>
                    )}
                    <Text style={styles.text}>Quiero pedir comida</Text>
                </Container>
            </Container>
        </SafeAreaView>
    )
}
