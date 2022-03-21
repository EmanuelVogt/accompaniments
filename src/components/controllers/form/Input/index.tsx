import React from 'react'
import { TextInputProps } from 'react-native'
import Toast from 'react-native-toast-message'

import { Container } from './styles'

interface Props extends TextInputProps {
  error?: string
}

export function Input({ error, ...rest }: Props) {
  return (
    <>
      <Container {...rest} />
      {error && Toast.show({ position: 'top', type: 'error', text1: 'Ops', text2: error })}
    </>
  )
}
