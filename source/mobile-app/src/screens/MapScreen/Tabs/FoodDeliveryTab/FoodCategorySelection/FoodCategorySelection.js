import React from 'react'
import {
  FlatList,
  Text
} from 'react-native'
import { Container } from 'components'
import { SafeAreaView } from 'react-navigation'

export default function FoodCategorySelection({
  categories
}) {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <Container flex alignCenter justifyCenter>
        <FlatList
          data={
            categories
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
