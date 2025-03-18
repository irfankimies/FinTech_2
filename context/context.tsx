import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import * as LocalAuthentication from 'expo-local-authentication'
import { Alert } from 'react-native'
import { ImageSourcePropType } from 'react-native'

type AuthContextType = {
  isAuthenticated: boolean
  onAuthenticate: () => void
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  getIcon: (iconPath: string) => ImageSourcePropType
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const getIcon = (iconPath: string): ImageSourcePropType => {
  const icons: Record<string, ImageSourcePropType> = {
    '../assets/bank1.png': require('../assets/bank1.png'),
    '../assets/duitnow.png': require('../assets/duitnow.png'),
    '../assets/bill.png': require('../assets/bill.png'),
    '../assets/topup.png': require('../assets/topup.png'),
    '../assets/subscription.png': require('../assets/subscription.png'),
    '../assets/atm.png': require('../assets/atm.png'),
    '../assets/shopping.png': require('../assets/shopping.png'),
    '../assets/food.png': require('../assets/food.png'),
    '../assets/gift.png': require('../assets/gift.png'),
    '../assets/movie.png': require('../assets/movie.png'),
    '../assets/gym.png': require('../assets/gym.png'),
  }

  return icons[iconPath] || require('../assets/default.png') // Fallback image
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  

  const onAuthenticate = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
        fallbackLabel: 'Enter Password',
      })
      setIsAuthenticated(result.success)
      return result.success
    } catch (error: unknown) {
      console.error('Authentication error:', error)

      const errorMessage =
        error instanceof Error
          ? error.message
          : typeof error === 'object' && error !== null && 'message' in error
            ? String(error.message)
            : 'Unknown error occured'

      if (errorMessage.includes('cancelled')) {
        Alert.alert('Authentication', 'Authentication was cancelled')
      } else if (errorMessage.includes('hardware')) {
        Alert.alert('Error', 'Biometric hardware not available')
      } else if (errorMessage.includes('not enrolled')) {
        Alert.alert(
          'Setup Required',
          'Biometric authentication not set up on this device',
        )
      } else {
        Alert.alert('Authentication Failed', 'Please try again later')
      }
    }
    setIsAuthenticated(false)
    return false
  }


  return (
    <AuthContext.Provider
      value={{ onAuthenticate, isAuthenticated, setIsAuthenticated, getIcon }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
