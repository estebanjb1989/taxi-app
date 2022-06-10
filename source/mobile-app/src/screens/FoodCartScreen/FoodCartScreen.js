
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
import styles from './styles'

export default function FoodCartScreen({ navigation }) {
    const cart = useSelector(state => state.deliverydata.cart)

    return (
        <SafeAreaView>
            <FlatList
                data={
                    cart?.items
                }
                windowSize={2}
                stickyHeaderIndices={[0]}
                ListHeaderComponent={(
                    <Container row spaceBetween alignCenter style={styles.header}>
                        <Container onPress={() => navigation.goBack()}>
                            <Text>⬅️</Text>
                        </Container>
                        <Container>
                            <Text style={styles.title}>Carrito</Text>
                        </Container>
                        <Container>
                        </Container>

                    </Container>
                )}
                renderItem={({ item }) => {
                    return (
                        <Container flex alignCenter spaceBetween style={styles.itemContainer}>
                            <Image
                                style={styles.itemImage}
                                resizeMode="stretch"
                                source={{
                                    uri: 'https://i.picsum.photos/id/194/200/300.jpg?hmac=jZgjsqqVvdWnXHdytjS2JPImgQFz9bGSyVQ31-b_eH4'
                                }} />
                            <Container style={styles.itemInfoContainer} fullWidth spaceBetween row alignCenter>
                                <Container>
                                    <Container>
                                        <Text>{item.name}</Text>
                                    </Container>
                                    <Container>
                                        <Text>Cantidad: {item.quantity}</Text>
                                    </Container>
                                </Container>
                                <Container>
                                    <Text>${item.price}</Text>
                                </Container>
                            </Container>
                        </Container>
                    )
                }}
            />
        </SafeAreaView>
    )
}
