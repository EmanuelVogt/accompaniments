import React from 'react'

import { AccompanimentsForm } from '../../components/AccompanimentsForm'
import { Container, Header, Title } from './styles'

export function Accompaniments() {
  return (
    <Container>
      <Header>
        <Title> Adicionar </Title>
      </Header>
      <AccompanimentsForm />
    </Container>
  )
}
