import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Image, Modal, View } from 'react-native'

import { OpenCamera } from '../OpenCamera'
import { Clip, Container, Icon, Photo } from './styles'

export type ImageType = {
  uri: string
  description?: string
}
export function ImageButtons() {
  const [modalCameraState, setModalCameraState] = useState(false)

  function handleOpenCamera() {
    setModalCameraState(!modalCameraState)
  }

  return (
    <>
      <Container>
        <Photo onPress={handleOpenCamera}>
          <Icon name="camera" />
        </Photo>
        <Clip>
          <Icon name="paperclip" />
        </Clip>
      </Container>
    </>
  )
}
