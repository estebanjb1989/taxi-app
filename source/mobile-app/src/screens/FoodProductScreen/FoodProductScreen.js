
import React, { useState, useEffect, useContext, useRef } from 'react'
import {
    FlatList,
    Text,
    SafeAreaView,
    Image,
    Touchable,
    ActivityIndicator,
} from 'react-native'
import { FirebaseContext } from 'common/src';
import { Container } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from 'common/src/actions/deliveryactions';
import styles from './styles'
import DropdownAlert from 'react-native-dropdownalert';
import { colors } from '../../common/theme'

export default function FoodProductScreen({ navigation }) {
    const dispatch = useDispatch()
    let dropDownAlertRef = useRef();
    const selectedVenue = useSelector(state => state.deliverydata.selectedVenue)
    const selectedCategory = useSelector(state => state.deliverydata.selectedCategory)
    const cart = useSelector(state => state.deliverydata.cart)
    const { productsRef, productCategoriesRef } = useContext(FirebaseContext);
    const [products, setProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(false)

    useEffect(() => {
        if (!selectedCategory) return
        setLoadingProducts(true)
        const categoryRef = productCategoriesRef
            .doc(selectedCategory.id);

        productsRef.where("related_categories", 'array-contains', categoryRef).get().then(data => {
            setProducts(
                data.docs.map(item => ({
                    id: item.id,
                    ...item.data()
                }))
            )
            setLoadingProducts(false)
        }).catch(() => setLoadingProducts(false))
    }, [selectedVenue])

    if (loadingProducts) {
        return (
            <ActivityIndicator color={colors.BRANDING} style={styles.loading} />
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Container style={{
                zIndex: 1
            }}>
                <DropdownAlert
                    ref={(ref) => {
                        if (ref) {
                            dropDownAlertRef = ref;
                        }
                    }}
                />
            </Container>
            <Container flex>
                <FlatList
                    data={
                        products
                    }
                    windowSize={2}
                    stickyHeaderIndices={[0]}
                    ListHeaderComponent={(
                        <Container row spaceBetween alignCenter style={styles.header}>
                            <Container onPress={() => navigation.goBack()}>
                                <Text>⬅️</Text>
                            </Container>
                            <Container>
                                <Text style={styles.title}>{selectedVenue?.name}</Text>
                            </Container>
                            <Container>
                            </Container>

                        </Container>
                    )}
                    renderItem={({ item }) => {
                        const cartQuantity = cart?.items?.find(product => product.id === item.id)?.quantity

                        return (
                            <Container
                                flex
                                alignCenter
                                spaceBetween
                                style={styles.itemContainer}
                                onPress={() => {
                                    dispatch(addToCart(item))
                                    dropDownAlertRef.alertWithType('success', 'Tu pedido',
                                        'Agregaste ' + item.name
                                    );
                                }}
                            >
                                <Image
                                    style={styles.itemImage}
                                    resizeMode="stretch"
                                    source={{
                                        uri: 'https://i.picsum.photos/id/194/200/300.jpg?hmac=jZgjsqqVvdWnXHdytjS2JPImgQFz9bGSyVQ31-b_eH4'
                                    }} />
                                <Container style={styles.itemInfoContainer} fullWidth spaceBetween row alignCenter>
                                    <Container style={styles.itemNameContainer}>
                                        <Text>{item.name}</Text>
                                    </Container>
                                    <Container>
                                        <Text>${item.price}</Text>
                                    </Container>
                                </Container>
                                {cartQuantity && <Container style={{
                                    position: 'absolute',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    alignSelf: 'flex-end',
                                    right: 12,
                                    top: 12,
                                    padding: 8,
                                    paddingHorizontal: 14,
                                    borderRadius: '50%',
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 18,
                                    }}>{cartQuantity}</Text>
                                </Container>}
                            </Container>
                        )
                    }}
                />
            </Container>

            <Container style={{
                position: 'absolute',
                bottom: 0,
                padding: 32,
                paddingBottom: 48,
                alignSelf: 'center'
            }} onPress={() => {
                navigation.navigate('FoodCart')
            }}>
                <Container style={{
                    backgroundColor: 'rgba(255, 255, 255, .75)',
                    padding: 16,
                    paddingHorizontal: 32,
                    borderWidth: 1,
                    borderColor: 'black'
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>VER CARRITO ${cart?.total || 0}</Text>
                </Container>
            </Container>
        </SafeAreaView>
    )
}
