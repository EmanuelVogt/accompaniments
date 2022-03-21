import React from 'react'

import { Clip, Container, Icon, Photo } from './styles'
export function ImageButtons() {
  return (
    <Container>
      <Photo>
        <Icon name="camera" />
      </Photo>
      <Clip>
        <Icon name="paperclip" />
      </Clip>
    </Container>
  )
}
