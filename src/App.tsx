import React from 'react'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components'

import theme from './global/theme'
import { toastConfig } from './global/toast.config'
import { Accompaniments } from './screens/Accompaniments'
import { Home } from './screens/Home'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Toast config={toastConfig} />
    </ThemeProvider>
  )
}
