import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useRouter } from 'expo-router'
import { useAuth } from '@/context/context'

const myImage = require('../assets/loginImage.jpg')

export default function onBoarding() {
  const router = useRouter()
  const { onAuthenticate } = useAuth()

  const handlePress = async () => {
    await onAuthenticate()
    router.push('/(tabs)')
  }
  return (
    <View style={styles.container}>
      <Image source={myImage} style={styles.image} />
      <Text style={styles.title}>EXPENDIO</Text>
      <Text style={styles.description}>
        Going cashless has never been this easier
      </Text>
      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  image: {
    width: 400,
    height: 461,
  },
  title: {
    fontSize: 50,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 30,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  btn: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
})
