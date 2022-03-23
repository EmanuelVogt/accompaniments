import React from 'react'

import { HomeInterface } from '../../components/HomeInterface'
import { HeaderTitle } from '../../components/controllers/HeaderTitle'
import { RootStackScreenProps } from '../../types/navigation'
import { Container } from './styles'
const company = {
  name: 'Sementes OAgro LTDA'
}

interface Props extends RootStackScreenProps<'Home'> {}
export function Home({ navigation }: Props) {
  return (
    <Container>
      <HeaderTitle iconName="dots-vertical" title={company.name} />
      <HomeInterface navigation={navigation} />
    </Container>
  )
}
