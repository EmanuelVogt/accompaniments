/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

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

type ImageProps = {
  uri: string
  description: string
}
interface Props {
  images: ImageProps[]
}

export function Gallery({ images }: Props) {
  return (
    <Container>
      <ImageList>
        {images.map((item) => (
          <ImageCard key={item.uri}>
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
              <ImageDescription>{item.description}</ImageDescription>
            </ImageContainer>
          </ImageCard>
        ))}
      </ImageList>
    </Container>
  )
}
