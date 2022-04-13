import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import uuid from 'react-native-uuid'

import { RootStackScreenProps } from '../../../types/navigation'
import { Gallery } from '../Gallery'
import { Clip, Container, Icon, Photo } from './styles'

export type Images = {
  id: string
  uri: string
  description?: string
}
export function ImageButtons() {
  const asyncStorage = useAsyncStorage('@SR-CAMPO-IMAGES')
  const [images, setImages] = useState<Images[]>()
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.6
    })
    if (!result.cancelled) {
      const imageSubmit = { ...result, id: uuid.v4() }
      const items = await asyncStorage.getItem()
      const itemsParsed = items ? JSON.parse(items) : []
      const dataSubmit = [...itemsParsed, imageSubmit]
      setImages(dataSubmit)
      await asyncStorage.setItem(JSON.stringify(dataSubmit))
    }
  }

  async function lauchCamera() {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.6
    })
    if (!result.cancelled) {
      const imageSubmit = { ...result, id: uuid.v4() }
      const items = await asyncStorage.getItem()
      const itemsParsed = items ? JSON.parse(items) : []
      const dataSubmit = [...itemsParsed, imageSubmit]
      setImages(dataSubmit)
      await asyncStorage.setItem(JSON.stringify(dataSubmit))
    }
  }

  async function handleDeletImage(val: string) {
    const images = await asyncStorage.getItem()
    const imagesParsed = images ? JSON.parse(images) : []
    const imageDeleted = imagesParsed.filter((index: any) => {
      return index.id !== val
    })
    setImages(imageDeleted)
    await asyncStorage.setItem(JSON.stringify(imageDeleted))
  }

  console.log(images)
  return (
    <>
      <Container>
        <Photo onPress={lauchCamera}>
          <Icon name="camera" />
        </Photo>
        <Clip onPress={pickImage}>
          <Icon name="paperclip" />
        </Clip>
      </Container>
      {images && <Gallery images={images} handleDeleteImage={handleDeletImage} />}
    </>
  )
}
