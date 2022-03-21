import React from 'react'

import { HomeInterface } from '../../components/HomeInterface'
import { Container, Header, Title, Icon, SubContainer } from './styles'

const company = {
  name: 'Sementes OAgro LTDA'
}
export function Home() {
  return (
    <Container>
      <Header>
        <Title> {company.name} </Title>
        <Icon name="dots-vertical" />
      </Header>
      <SubContainer>
        <HomeInterface />
      </SubContainer>
    </Container>
  )
}
