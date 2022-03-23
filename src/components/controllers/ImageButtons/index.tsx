import React, { useState } from 'react'
import { Modal } from 'react-native'

import { OpenCamera } from '../Camera'
import { Clip, Container, Icon, Photo } from './styles'
export function ImageButtons() {
  const [openCamera, setOpenCamera] = useState(false)

  function handleOpenCamera() {
    setOpenCamera(!openCamera)
    console.log(openCamera)
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
      <Modal visible={openCamera}>
        <OpenCamera setClose={handleOpenCamera} />
      </Modal>
    </>
  )
}
