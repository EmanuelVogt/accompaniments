import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'

import { HomeInterface } from '../../components/HomeInterface'
import { HeaderTitle } from '../../components/controllers/HeaderTitle'
import { MainNavigation } from '../../types'
import { Container, SubContainer } from './styles'

const company = {
  name: 'Sementes OAgro LTDA'
}

export interface NavigationProps {
  navigation: NativeStackNavigationProp<MainNavigation, 'Home'>
}

export function Home({ navigation }: NavigationProps) {
  return (
    <Container>
      <HeaderTitle iconName="dots-vertical" title={company.name} />
      <SubContainer>
        <HomeInterface navigation={navigation} />
      </SubContainer>
    </Container>
  )
}
