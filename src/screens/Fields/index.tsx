import React from 'react'

import { FieldInterface } from './FieldInterface'
import { Container } from './styles'

export function Field({ route, navigation }) {
  return (
    <Container>
      <FieldInterface field="aa" route={route} navigation={navigation} />
    </Container>
  )
}
