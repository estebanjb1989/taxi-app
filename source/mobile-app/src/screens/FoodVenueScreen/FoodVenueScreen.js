import React, { useState, useContext, useEffect } from 'react'
import {
  ActivityIndicator,
  Image,
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native'
import { Container } from 'components'
import { SafeAreaView } from 'react-navigation'
import { FirebaseContext } from 'common/src';

export default function FoodVenueScreen({
  venues,
  onChangeVenue,
}) {
  const { getImageDownloadURL } = useContext(FirebaseContext);
  const [loadingImage, setLoadingImage] = useState(false)

  if (!venues) {
    return null
  }

  const [venueImages, setVenueImages] = useState({})

  useEffect(() => {
    if (!venues) return

    let buffer = {}
    venues.forEach(venue => {
      if (!venue.main_image) return
      buffer[venue.name] = {
        source: null,
        loaded: false,
      }
    })
    setVenueImages(buffer)
  }, [venues])

  return (
    <SafeAreaView style={{
      flex: 1,
    }} forceInset={{
      top: 'never'
    }}>
      <Container flex alignCenter justifyCenter>
        <FlatList
          data={
            venues
          }
          style={{
            width: '100%'
          }}
          renderItem={({ item }) => {
            
            return (
              <Container style={{
                width: '100%',
                paddingVertical: 12,
                paddingBottom: 32,
                height: 200,
                marginBottom: 12,
              }}
                onPress={() => {
                  onChangeVenue(item)
                }}
              >
                <View style={{
                  paddingHorizontal: 4,
                }}>
                  <Text>{item.name}</Text>
                </View>
                <View style={{
                  paddingVertical: 6,
                }} />
                {loadingImage && <ActivityIndicator />}
                <Image
                  onLoadStart={() => setLoadingImage(true)}
                  onLoadEnd={() => setLoadingImage(false)}
                  style={{
                    height: '100%',
                  }}
                  resizeMode="stretch"
                  source={{
                    uri: venueImages[item.name]?.source
                  }}
                />
              </Container>
            )
          }}
        />
      </Container>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});