import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import StartPage from '@/screens/onBoarding'
import Colors from '@/constants/colors'

const logInPage = () => {
  return (
    <View style={styles.container}>
      <StartPage />
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
