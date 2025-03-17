import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/colors'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: 'home' | 'wallet-outline' | undefined
          if (route.name === 'index') {
            iconName = 'home'
          } else if (route.name === 'account') {
            iconName = 'wallet-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: Colors.LIGHT_RED,
        tabBarInactiveTintColor: Colors.GRAY,
        headerShown: false,
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="account" options={{ title: 'Account' }} />
    </Tabs>
  )
}
