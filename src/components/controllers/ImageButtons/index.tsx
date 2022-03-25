import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage'
import React, { useEffect, useState } from 'react'
import { Image, Modal, Text, View } from 'react-native'

import { OpenCamera } from '../OpenCamera'
import { Clip, Container, Icon, Photo } from './styles'

export type ImageType = {
  uri: string
  description?: string
}
export function ImageButtons() {
  const [modalCameraState, setModalCameraState] = useState(false)
  const [images, setImages] = useState<ImageType[]>()
  function handleOpenCamera() {
    setModalCameraState(!modalCameraState)
  }

  function handleSetImages(data: ImageType) {
    const totalImages = [
      {
        uri: '1'
      }
    ]
    totalImages.push({ uri: '2' })
    console.log(totalImages)
  }

  const data = []
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@IMAGES')
      data.push(jsonValue != null ? JSON.parse(jsonValue) : null)
    } catch (e) {
      // error reading value
    }
  }
  getData()
  useEffect(() => {
    setImages(data)
  }, [])

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
      <View style={{ flex: 1, backgroundColor: '#a3a', height: 100, flexDirection: 'row' }}>
        {images?.map((item) => (
          <Image
            key={item.uri}
            source={{ uri: item.uri }}
            style={{ width: '100%', height: 100, borderRadius: 20, flex: 0.3 }}
          />
        ))}
      </View>
      {modalCameraState && (
        <Modal animationType="slide" visible={modalCameraState}>
          <OpenCamera setClose={handleOpenCamera} />
        </Modal>
      )}
    </>
  )
}
