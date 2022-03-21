import React from 'react'
import { FlatList } from 'react-native'

import { crops } from '../../../api/fakeData/crops'
import { Container, Header, Title, Field, Name, Divider, SubContainer } from './styles'

export interface Crop {
  name: string
  key: string
}

interface Props {
  crop: Crop
  setCrop: (crop: Crop) => void
  closeModal: () => void
}

export function CropSelect({ setCrop, closeModal }: Props) {
  function handleSelectCrop(item: Crop) {
    setCrop({
      key: item.key,
      name: item.name
    })
    closeModal()
  }
  return (
    <>
      <Container>
        <Header>
          <Title> Selecione a Safra </Title>
        </Header>
        <SubContainer>
          <FlatList
            data={crops}
            style={{ flex: 1, width: '100%' }}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Field onPress={() => handleSelectCrop(item)}>
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
