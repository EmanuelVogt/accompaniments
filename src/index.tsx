import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components'

import { DatabaseConnectionProvider } from './database'
import theme from './global/theme'
import { toastConfig } from './global/toast.config'
import { AppRoutes } from './routes/app.routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <DatabaseConnectionProvider>
          <AppRoutes />
        </DatabaseConnectionProvider>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </ThemeProvider>
  )
}
