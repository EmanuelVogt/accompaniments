import React from 'react'

import { RootStackScreenProps } from '../../../types/navigation'
import {
  Container,
  Header,
  SubContainer,
  Title,
  FieldImage,
  ImageContainer,
  InfosContainer,
  FieldInfo,
  Icon,
  Description,
  FloatActionButton,
  IconFloatActionButton
} from './styles'
interface Props extends RootStackScreenProps<'Field'> {
  field: any
}
export function FieldInterface({ field, navigation, route }: Props) {
  return (
    <>
      <Container>
        <Header>
          <Title> {field.name} </Title>
        </Header>
        <SubContainer>
          <ImageContainer>
            <FieldImage
              source={{
                uri: 'https://i.ytimg.com/vi/6g_lWPzFqPw/maxresdefault.jpg'
              }}
            />
          </ImageContainer>
          <InfosContainer>
            <FieldInfo>
              <Icon name="calculator" />
              <Description> Produção estimada (SCS 60KG/HA): </Description>
            </FieldInfo>
            <FieldInfo>
              <Icon name="map-marker-path" />
              <Description> Área 140 HA </Description>
            </FieldInfo>
            <FieldInfo>
              <Icon name="leaf" />
              <Description> Cultivar IPR Esmeralda </Description>
            </FieldInfo>
          </InfosContainer>
          <InfosContainer>
            <FieldInfo>
              <Icon name="account" />
              <Description> Cooperado: Emanuel Vogt </Description>
            </FieldInfo>
          </InfosContainer>
        </SubContainer>
      </Container>
      <FloatActionButton onPress={() => navigation.navigate('FieldActions')}>
        <IconFloatActionButton name="plus" />
      </FloatActionButton>
    </>
  )
}
