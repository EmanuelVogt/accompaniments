import React from 'react'
import { FlatList } from 'react-native'

import { fields } from '../../../api/fakeData/fields'
import { Container, Header, Title, Field, Name, Divider, SubContainer } from './styles'

interface Fields {
  key: string
  name: string
}

interface Props {
  field: Fields
  setField: (field: Fields) => void
  closeModal: () => void
}

export function FieldSelect({ setField, closeModal }: Props) {
  function handleSelectField(item: Fields) {
    setField({
      key: item.key,
      name: item.name
    })
    closeModal()
  }
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
              <Field onPress={() => handleSelectField(item)}>
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
