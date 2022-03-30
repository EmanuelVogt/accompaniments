import React, { useState } from 'react'
import { Modal, ScrollView } from 'react-native'

import { CropSelect, Crop } from '../controllers/CropSelect'
import {
  Container,
  SelectCropButton,
  TitleSelect,
  CropSelected,
  Icon,
  FieldActivity,
  Title,
  FieldActivityButton,
  IconTwo,
  ButtonText,
  FieldActivityContainer,
  QrCodeButton,
  GpsButton,
  RoutePlaning,
  Manegament,
  DefaultButton,
  PreRegistrationField
} from './styles'

export function HomeInterface({ navigation }) {
  const [cropModalState, setCrpopModalState] = useState<boolean>(false)
  function handleCropStateModal() {
    setCrpopModalState(!cropModalState)
  }
  const [crop, setCrop] = useState<Crop>({
    key: '',
    name: 'Selecione'
  })
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SelectCropButton onPress={handleCropStateModal}>
          <TitleSelect> Safra Selecionada: </TitleSelect>
          <CropSelected> {crop.name} </CropSelected>
          <Icon name="chevron-down" />
        </SelectCropButton>
        <FieldActivity>
          <Title> Atividades de Campo </Title>
          <FieldActivityButton
            onPress={() => {
              navigation.navigate('FieldSelect')
            }}
          >
            <IconTwo name="list" />
            <ButtonText>LISTAGEM DE CAMPO</ButtonText>
          </FieldActivityButton>
          <FieldActivityContainer>
            <QrCodeButton>
              <IconTwo name="qrcode" />
              <ButtonText style={{ fontSize: 14 }}>QR CODE</ButtonText>
            </QrCodeButton>
            <GpsButton>
              <IconTwo name="map-marked-alt" />
              <ButtonText style={{ fontSize: 14 }}>GPS</ButtonText>
            </GpsButton>
          </FieldActivityContainer>
        </FieldActivity>
        <RoutePlaning>
          <Title> Planejamento de Rota </Title>
          <DefaultButton>
            <IconTwo name="route" />
            <ButtonText style={{ fontSize: 16 }}>PLANEJAMENTO DE ROTA</ButtonText>
          </DefaultButton>
        </RoutePlaning>
        <Manegament>
          <Title> Gestão </Title>
          <DefaultButton>
            <IconTwo name="map" />
            <ButtonText style={{ fontSize: 16 }}>MAPA DA SAFRA</ButtonText>
          </DefaultButton>
          <DefaultButton>
            <IconTwo name="route" />
            <ButtonText style={{ fontSize: 16 }}>LINHA DO TEMPO</ButtonText>
          </DefaultButton>
          <DefaultButton>
            <IconTwo name="clipboard-list" />
            <ButtonText style={{ fontSize: 16 }}>RELATÓRIO</ButtonText>
          </DefaultButton>
        </Manegament>
        <PreRegistrationField>
          <Title> Pré-Cadastro de Campo </Title>
          <DefaultButton>
            <IconTwo name="list" />
            <ButtonText style={{ fontSize: 16 }}>LISTAGEM</ButtonText>
          </DefaultButton>
        </PreRegistrationField>
      </ScrollView>
      <Modal visible={cropModalState} animationType="fade">
        <CropSelect crop={crop} setCrop={setCrop} closeModal={handleCropStateModal} />
      </Modal>
    </Container>
  )
}
