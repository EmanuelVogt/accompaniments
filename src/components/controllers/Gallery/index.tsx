/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import { useDatabaseConnection } from '../../../providers/db/databaseContext'
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
  const { imagesRepository } = useDatabaseConnection()

  const [images, setImages] = useState([])

  useEffect(() => {
    imagesRepository.getAll().then(setImages)
  }, [imagesRepository])

  console.log('aaa', images)
  return (
    <Container>
      <ImageList>
        {images.map((item) => (
          <ImageCard key={item.id}>
            <Header>
              <EditButton>
                <EditIconButton name="square-edit-outline" />
              </EditButton>
              <DeleteButton>
                <DeleteIconButton name="trash-can-outline" />
              </DeleteButton>
            </Header>
            <ImageContainer>
              <Image source={{ uri: item.uri }} />
            </ImageContainer>
          </ImageCard>
        ))}
      </ImageList>
    </Container>
  )
}
