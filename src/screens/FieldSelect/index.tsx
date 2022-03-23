import React from 'react'
import { FlatList } from 'react-native'

import { fields } from '../../api/fakeData/fields'
import { HeaderTitle } from '../../components/controllers/HeaderTitle'
import { RootStackScreenProps } from '../../types/navigation'
import { Container, Field, Name, Divider, SubContainer } from './styles'

interface Props extends RootStackScreenProps<'FieldSelect'> {}

export function FieldSelect({ navigation }: Props) {
  return (
    <Container>
      <SubContainer>
        <FlatList
          data={fields}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Field
              onPress={() => {
                navigation.navigate('Field', {
                  name: item.name,
                  key: item.key
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
  )
}
