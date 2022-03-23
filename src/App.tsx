import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components'

import 'react-native-gesture-handler'
import theme from './global/theme'
import { toastConfig } from './global/toast.config'
import { AppRoutes } from './routes/app.routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </ThemeProvider>
  )
}
