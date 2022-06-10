import React, { useState, useEffect, useContext } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Text,
  SafeAreaView,
  Image,
} from 'react-native'
import { FirebaseContext } from 'common/src';
import { Container } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { updateSelectedCategory } from 'common/src/actions/deliveryactions';
import styles from './styles'
import { colors } from '../../common/theme'

export default function FoodCategoryScreen({ navigation }) {
  const dispatch = useDispatch()
  const selectedVenue = useSelector(state => state.deliverydata.selectedVenue)
  const { venuesRef, productCategoriesRef, getImageDownloadURL } = useContext(FirebaseContext);
  const [productCategories, setProductCategories] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(false)
  const [images, setImages] = useState({})

  useEffect(() => {
    if (!selectedVenue) return
    setLoadingCategories(true)
    const venueRef = venuesRef
      .doc(selectedVenue.id);

    productCategoriesRef.where("related_venues", 'array-contains', venueRef).get().then(data => {
      setProductCategories(
        data.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
      )
      setLoadingCategories(false)
    }).catch(() => {
      setLoadingCategories(false)
    })
  }, [selectedVenue])

  useEffect(() => {
    async function getImages() {
      if (!productCategories?.length) {
        return
      }
      let payload = {}
      for (const productCategory of productCategories) {
        const res = await getImageDownloadURL(productCategory.main_image)
        payload = {
          ...payload,
          [productCategory.id]: res
        }
      }
      setImages(payload)
    }
    getImages()
  }, [productCategories])

  if (loadingCategories) {
    return (
      <ActivityIndicator style={styles.loading} color={colors.BRANDING} />
    )
  }

  return (
    <SafeAreaView style={{
      backgroundColor: colors.BACKGROUND
    }}>
      <Container row spaceBetween>
        <Container></Container>
        <Text style={styles.title}>{selectedVenue?.name}</Text>
        <Container></Container>
      </Container>
      <FlatList
        data={
          productCategories
        }
        ListEmptyComponent={
          <Container alignCenter style={{
            paddingTop: 12,
          }}>
            <Text>{selectedVenue?.name} no ha cargado informacion</Text>
          </Container>
        }
        renderItem={({ item }) => {
          //const cartQuantity = cart?.items?.filter(product => product.id === item.id)

          return (
            <Container
              onPress={() => {
                dispatch(updateSelectedCategory(item))
                navigation.navigate('FoodProduct')
              }}
              flex
              alignCenter
              justifyCenter
              style={styles.itemContainer}
            >
              {images[item.id] ? <Image
                style={styles.itemImage}
                resizeMode="stretch"
                source={{
                  uri: images[item.id]
                }} /> :
                <Text style={{
                  color: 'white',
                  fontSize: 22,
                }}>{item.name}</Text>}
              {/* <Container style={styles.itemTextContainer} alignCenter justifyCenter>
                <Text>{item.name}</Text>
              </Container> */}
            </Container>
          )
        }}
      />
    </SafeAreaView>
  )
}
