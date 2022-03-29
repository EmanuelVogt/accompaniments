import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useCallback } from 'react'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components'

import theme from './global/theme'
import { toastConfig } from './global/toast.config'
import { AppRoutes } from './routes/app.routes'
import { resetData } from './utils/resetData'

export default function App() {
  useEffect(
    useCallback(() => {
      resetData()
    }, [])
  )
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </ThemeProvider>
  )
}
