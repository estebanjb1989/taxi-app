
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
import WomanAsset from 'assets/images/woman.png'
import VerifiedAsset from 'assets/images/verified.png'

export default function FansFeedScreen({ navigation }) {
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
            <Image
                source={WomanAsset}
                style={styles.asset}
            />
            <Container style={styles.content} alignCenter>
                <Container row alignCenter>
                    <Text style={styles.title}>Smart Woman</Text>
                    <Image source={VerifiedAsset} style={styles.verifiedIcon} />
                </Container>

            </Container>
        </SafeAreaView>
    )

}
