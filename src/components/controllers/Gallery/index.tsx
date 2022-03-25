import React from 'react'

import { Container, ImageList, Header, EditButton, DeleteButton, Image, ImageCard } from './styles'
export function Gallery() {
  return (
    <Container>
      <ImageList>
        <ImageCard>
          <Header>
            <EditButton />
            <DeleteButton />
          </Header>
          <Image />
        </ImageCard>
        <ImageCard>
          <Header>
            <EditButton />
            <DeleteButton />
          </Header>
          <Image />
        </ImageCard>
        <ImageCard>
          <Header>
            <EditButton />
            <DeleteButton />
          </Header>
          <Image />
        </ImageCard>
      </ImageList>
    </Container>
  )
}
