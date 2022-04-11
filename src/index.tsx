import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components'

import theme from './global/theme'
import { toastConfig } from './global/toast.config'
import { DatabaseConnectionProvider } from './providers/db/databaseContext'
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
