import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Detailssssss</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})