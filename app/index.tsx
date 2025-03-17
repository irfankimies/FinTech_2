import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/constants/colors'
import OnBoarding from '@/screens/OnBoarding' // Adjust the path as needed

const logInPage = () => {
  return (
    <View style={styles.container}>
      <OnBoarding />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
})

export default logInPage
