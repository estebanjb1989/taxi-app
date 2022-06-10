import React, { useState, useContext, useEffect } from 'react'
import {
    ActivityIndicator,
    Image,
    FlatList,
    Text,
    TextInput,
    RefreshControl,
} from 'react-native'
import { Container } from 'components'
import { SafeAreaView } from 'react-navigation'
import { FirebaseContext } from 'common/src';
import { useDispatch } from 'react-redux'
import styles from './styles'
import { updateSelectedVenue } from 'common/src/actions/deliveryactions';
import { colors } from '../../common/theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function FoodDeliveryScreen({ navigation }) {
    const [loadingVenues, setLoadingVenues] = useState(false)
    const [venues, setVenues] = useState(false)
    const [venueImage, setVenueImage] = useState({})
    const { venuesRef, getImageDownloadURL } = useContext(FirebaseContext);
    const dispatch = useDispatch()

    const refresh = () => {
        setLoadingVenues(true)
        venuesRef.get().then(data => {
            setLoadingVenues(false)
            setVenues(
                data.docs.map(item => ({
                    ...item.data(),
                    id: item.id,
                }))
            )
        }).catch((error) => {
            console.error(error)
            setLoadingVenues(false)
        })
    }

    useEffect(() => {
        refresh()
    }, [])

    /*useEffect(() => {
        async function getVenueImages() {
            if (!venues?.length) {
                return
            }
            let payload = {}
            for (const venue of venues) {
                const res = await getImageDownloadURL(venue.main_image)
                payload = {
                    ...payload,
                    [venue.id]: res
                }
            }
            setVenueImage(payload)
        }
        getVenueImages()
    }, [venues])*/

    if (loadingVenues) {
        return (
            <ActivityIndicator
                style={styles.loading}
                color={colors.BRANDING}
            />
        )
    }

    return (
        <SafeAreaView
            style={styles.safeArea}
        >
            <Container row spaceBetween>
                <Text style={{
                    fontSize: 22,
                    color: 'white',
                    marginLeft: 24,
                    marginTop: 12,
                    fontWeight: 'bold'
                }}>Bienvenido Esteban!</Text>
            </Container>
            <Container alignCenter style={styles.inputContainer}>
                <FontAwesome
                    style={styles.searchIcon}
                    name="search"
                    color={colors.BRANDING}
                    size="24"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Busca lo que quieras"
                />
            </Container>
            <Container>
                <FlatList
                    data={venues}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContentContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={loadingVenues}
                            onRefresh={refresh}
                        />
                    }
                    renderItem={({ item }) => (
                        <Container alignCenter onPress={() => {
                            dispatch(updateSelectedVenue(item))
                            navigation.navigate('FoodCategory')
                        }}
                            style={styles.tile}
                        >
                            <Image source={{
                                uri: venueImage[item.id] || 'https://via.placeholder.com/150',
                            }} style={styles.image} />
                            <Container style={styles.spacer} />
                            <Text style={styles.text}>{item.name}</Text>
                        </Container>
                    )}
                />
                <Container alignEnd style={styles.viewMoreContainer}
                    onPress={() => navigation.navigate('FoodVenueScreen')}
                >
                    <Text style={styles.viewMoreText}>
                        VER MAS
                    </Text>
                </Container>
            </Container>
        </SafeAreaView>
    )

}
