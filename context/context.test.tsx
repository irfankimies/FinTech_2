import React, { useEffect } from 'react'
import { render } from '@testing-library/react-native'
import { Text } from 'react-native'
import { AuthProvider, useAuth } from './context'
import * as LocalAuthentication from 'expo-local-authentication'

// Mock LocalAuthentication
jest.mock('expo-local-authentication', () => ({
  authenticateAsync: jest.fn(),
}))

describe('AuthContext', () => {
  test('should set authentication state when authentication succeeds', async () => {
    (LocalAuthentication.authenticateAsync as jest.Mock).mockResolvedValue({ success: true })

    const TestComponent = () => {
      const { isAuthenticated, onAuthenticate } = useAuth()

      useEffect(() => {
        onAuthenticate()
      }, [])

      return isAuthenticated ? (
        <Text>Authenticated</Text>
      ) : (
        <Text>Not Authenticated</Text>
      )
    }

    const { findByText } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    )

    expect(await findByText('Authenticated')).toBeTruthy()
  })

  test('should not authenticate when authentication fails', async () => {
    (LocalAuthentication.authenticateAsync as jest.Mock).mockResolvedValue({ success: false })

    const TestComponent = () => {
      const { isAuthenticated, onAuthenticate } = useAuth()

      useEffect(() => {
        onAuthenticate()
      }, [])

      return isAuthenticated ? (
        <Text>Authenticated</Text>
      ) : (
        <Text>Not Authenticated</Text>
      )
    }

    const { findByText } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    )

    expect(await findByText('Not Authenticated')).toBeTruthy()
  })
})

import { getIcon } from './context'

describe('getIcon', () => {
  test('returns the correct icon path', () => {
    expect(getIcon('../assets/bank1.png')).toBe(require('../assets/bank1.png'))
    expect(getIcon('../assets/food.png')).toBe(require('../assets/food.png'))
  })

  test('returns the default icon for unknown paths', () => {
    expect(getIcon('unknown/path.png')).toBe(require('../assets/default.png'))
  })
})

