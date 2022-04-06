/* eslint-disable react-hooks/exhaustive-deps */
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'

import {
  Container,
  ImageList,
  Header,
  EditButton,
  DeleteButton,
  Image,
  ImageCard,
  ImageContainer,
  ImageDescription,
  EditIconButton,
  DeleteIconButton
} from './styles'

export function Gallery() {
  const asyncStorage = useAsyncStorage('@SR-CAMPO')
  const [images, setImages] = useState([])

  async function loadData() {
    const images = await asyncStorage.getItem()
    const imagesParsed = images ? JSON.parse(images) : []
    setImages(imagesParsed)
  }

  useFocusEffect(
    useCallback(() => {
      loadData()
    }, [])
  )
  async function handleDeletImage(val: string) {
    const images = await asyncStorage.getItem()
    const imagesParsed = images ? JSON.parse(images) : []
    const imageDeleted = imagesParsed.filter((index: any) => {
      return index.id !== val
    })
    setImages(imageDeleted)
    await asyncStorage.setItem(JSON.stringify(imageDeleted))
  }
  if (images.length > 0) {
    return (
      <Container>
        <ImageList>
          {images.map((item) => (
            <ImageCard key={item.id}>
              <Header>
                <EditButton>
                  <EditIconButton name="square-edit-outline" />
                </EditButton>
                <DeleteButton onPress={() => handleDeletImage(item.id)}>
                  <DeleteIconButton name="trash-can-outline" />
                </DeleteButton>
              </Header>
              <ImageContainer>
                <Image source={{ uri: item.uri }} />
              </ImageContainer>
              <ImageDescription>{item.description}</ImageDescription>
            </ImageCard>
          ))}
        </ImageList>
      </Container>
    )
  } else {
    return null
  }
}
