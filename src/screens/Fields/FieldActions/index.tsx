import React from 'react'

import { RootStackScreenProps } from '../../../types/navigation'
import {
  Container,
  Header,
  CloseIcon,
  CloseButton,
  SubContainer,
  FieldActionContainer,
  DefaultButton,
  Title,
  FieldActionsButtonsContainer,
  ButtonTitle
} from './styles'

interface Props extends RootStackScreenProps<'FieldActions'> {
  stateModal: () => void
}
export function FieldActionsModal({ stateModal, navigation, route }: Props) {
  return (
    <Container>
      <Header>
        <CloseButton onPress={() => navigation.goBack()}>
          <CloseIcon name="close" />
        </CloseButton>
      </Header>
      <SubContainer>
        <FieldActionContainer>
          <Title> Operações de Campo</Title>
          <FieldActionsButtonsContainer>
            <DefaultButton onPress={() => navigation.navigate('AccompanimentForm')}>
              <ButtonTitle> ACOMPANHAMENTO </ButtonTitle>
            </DefaultButton>
            <DefaultButton>
              <ButtonTitle> APLICAÇÃO DE PRODUTO </ButtonTitle>
            </DefaultButton>
          </FieldActionsButtonsContainer>
        </FieldActionContainer>
        <FieldActionContainer
          style={{
            height: 190
          }}
        >
          <Title> Vistorias </Title>
          <FieldActionsButtonsContainer>
            <DefaultButton>
              <ButtonTitle> VISTORIA DE EMERGÊNCIA </ButtonTitle>
            </DefaultButton>
            <DefaultButton>
              <ButtonTitle> VISTORIA DE FLORAÇÃO </ButtonTitle>
            </DefaultButton>
          </FieldActionsButtonsContainer>
          <FieldActionsButtonsContainer>
            <DefaultButton>
              <ButtonTitle> VISTORIA DE PRÉ-COLHEITA </ButtonTitle>
            </DefaultButton>
            <DefaultButton>
              <ButtonTitle> VISTORIA DE COLHEITA </ButtonTitle>
            </DefaultButton>
          </FieldActionsButtonsContainer>
        </FieldActionContainer>
        <FieldActionContainer>
          <Title> Qualidade </Title>
          <FieldActionsButtonsContainer>
            <DefaultButton>
              <ButtonTitle> AVALIAÇÃO DE BANDINHA </ButtonTitle>
            </DefaultButton>
            <DefaultButton>
              <ButtonTitle> TESTE DE HIPOCLORITO DE SÓDIO </ButtonTitle>
            </DefaultButton>
          </FieldActionsButtonsContainer>
        </FieldActionContainer>
      </SubContainer>
    </Container>
  )
}
