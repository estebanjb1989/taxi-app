import React, { useState, useContext, useEffect } from 'react'
import {
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  Image,
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native'
import { Container } from 'components'
import { SafeAreaView } from 'react-navigation'
import { FirebaseContext } from 'common/src';

export default function VenueSelection({
  venues,
  onChangeVenue,
}) {
  const { getImageDownloadURL } = useContext(FirebaseContext);

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
            if (item.main_image &&
              !venueImages[item.name]?.source &&
              !venueImages[item.name]?.loaded) {
              getImageDownloadURL(item.main_image).then(data => {
                setVenueImages({
                  ...venueImages,
                  [item.name]: {
                    source: data,
                    loaded: true,
                  }
                })
              })
            }
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
                <Image style={{
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