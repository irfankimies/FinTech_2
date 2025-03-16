import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AccountDetails from '@/screens/AccountDetails'
import { useRoute } from '@react-navigation/native'
import { useAuth } from '@/context/context'

const account = () => {
  const { onAuthenticate } = useAuth()
  const route = useRoute()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (route.name === 'account') {
      ;(async () => {
        await onAuthenticate()
        setLoading(false)
      })()
    }
  }, [route.name])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <AccountDetails />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default account
