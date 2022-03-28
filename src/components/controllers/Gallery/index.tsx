import React from 'react'

import { Container, ImageList, Header, EditButton, DeleteButton, Image, ImageCard } from './styles'
export function Gallery() {
  return (
    <Container>
      <ImageList>
        <ImageCard>
          <Header>
            <EditButton name="square-edit-outline" />
            <DeleteButton name="trash-can-outline" />
          </Header>
          <Image />
        </ImageCard>
        <ImageCard>
          <Header>
            <EditButton name="square-edit-outline" />
            <DeleteButton name="trash-can-outline" />
          </Header>
          <Image />
        </ImageCard>
        <ImageCard>
          <Header>
            <EditButton name="square-edit-outline" />
            <DeleteButton name="trash-can-outline" />
          </Header>
          <Image />
        </ImageCard>
      </ImageList>
    </Container>
  )
}
