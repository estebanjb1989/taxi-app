import React, { useState, useEffect } from 'react'
import {
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native'
import { Container } from 'components'
import { SafeAreaView } from 'react-navigation'

export default function FoodCategorySelection(props) {
  const layout = useWindowDimensions()
  const [selectedFoodCategory, setSelectedFoodCategory] = useState(null)
  const [foodByCategory, setFoodByCategory] = useState([])
  const [selectedFood, setSelectedFood] = useState(null)

  const foodCategories = [
    { id: 1, name: 'Hamburguesas' },
    { id: 2, name: 'Pizza' },
    { id: 3, name: 'Empanadas' },
  ]

  useEffect(() => {
    if (!selectedFoodCategory) return
    setFoodByCategory(
      foodCategories.filter(category => {
        return category.id === selectedFoodCategory
      })
    )
  }, [selectedFoodCategory])

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <Container flex alignCenter justifyCenter>
        <FlatList
          data={
            !selectedFoodCategory ? foodCategories : foodByCategory
          }
          renderItem={({ item }) => {
            return (
              <Container>
                <Text>{item.name}</Text>
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