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

interface Images {
  id: string
  uri: string
  description?: string
}
interface Props {
  images: Images[]
  handleDeleteImage: (id: string) => void
}
export function Gallery({ images, handleDeleteImage }: Props) {
  if (images) {
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
                  <DeleteButton onPress={() => handleDeleteImage(item.id)}>
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
    } else return null
  } else {
    return null
  }
}
