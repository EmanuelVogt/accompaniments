import React from 'react'
import { ButtonProps } from 'react-native'

import { Container, Title } from './styles'

interface Props extends ButtonProps {
  title: string
}
export function FormButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title> {title} </Title>
    </Container>
  )
}
