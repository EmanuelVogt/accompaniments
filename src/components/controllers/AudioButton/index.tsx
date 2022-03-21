import React from 'react'

import { Container, Icon, Audio } from './styles'
export function AudioButton() {
  return (
    <Container>
      <Audio>
        <Icon name="microphone" />
      </Audio>
    </Container>
  )
}
