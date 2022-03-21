import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList } from 'react-native'

import { fields } from '../../api/fakeData/fields'
import { MainNavigation } from '../../types'
import { Container, Header, Title, Field, Name, Divider, SubContainer } from './styles'

interface NavigationProps {
  navigation: NativeStackNavigationProp<MainNavigation, 'FieldSelect'>
}

export function FieldSelect({ navigation }: NavigationProps) {
  return (
    <>
      <Container>
        <Header>
          <Title> Selecione o Campo </Title>
        </Header>
        <SubContainer>
          <FlatList
            data={fields}
            style={{ flex: 1, width: '100%' }}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Field
                onPress={() => {
                  navigation.push('Accompaniments', {
                    field: item
                  })
                }}
              >
                <Name> {item.name} </Name>
              </Field>
            )}
            ItemSeparatorComponent={() => <Divider />}
          />
        </SubContainer>
      </Container>
    </>
  )
}
