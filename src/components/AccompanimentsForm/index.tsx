/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, Keyboard, ScrollView, Text, TouchableWithoutFeedback } from 'react-native'
import Toast from 'react-native-toast-message'
import * as Yup from 'yup'

import { RootStackScreenProps } from '../../types/navigation'
import { AudioButton } from '../controllers/AudioButton'
import { Gallery } from '../controllers/Gallery'
import { ImageButtons } from '../controllers/ImageButtons'
import { PrecipitationForm } from '../controllers/PrecipitationForm'
import { DatePiker } from '../controllers/form/DatePiker'
import { InputForm } from '../controllers/form/InputForm'
import { Label } from '../controllers/form/Label'
import {
  Container,
  Form,
  SubContainer,
  Divider,
  FieldProduction,
  HeaderButton,
  HeaderButtonTitle,
  BackButton,
  BackButtonIcon
} from './styles'

const schema = Yup.object().shape({
  area: Yup.number()
    .typeError('A área não pode conter vírgulas')
    .positive('A área deve ter um valor positivo')
    .required('A área é obrigatória'),
  totalProduction: Yup.number()
    .typeError('Total de produção não pode conter vírgulas')
    .positive('O total de produção deve ter um valor positivo')
    .required('Total de produção é obrigatório'),
  totalProductionTon: Yup.number()
    .typeError('Total de produção em toneladas não pode conter vírgulas')
    .positive('O total de produção em toneladas deve ter um valor positivo')
    .required('Total de em toneladas produção é obrigatório')
})

interface FormData {
  area: string
  totalProduction: string
  totalProductionTon: string
  observations: string
}
interface Props extends RootStackScreenProps<'AccompanimentForm'> {}
export function AccompanimentsForm({ navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <BackButton
          onPress={() => {
            handleBackButtonPress()
          }}
        >
          <BackButtonIcon name="arrow-left" />
        </BackButton>
      ),
      headerRight: () => (
        <HeaderButton
          onPress={() => {
            handleSubmit(onSubmit)
          }}
        >
          <HeaderButtonTitle>Finalizar</HeaderButtonTitle>
        </HeaderButton>
      )
    })
  }, [navigation])
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({
    resolver: yupResolver(schema)
  })
  const [hasPrecipitation, setHasPrecipitation] = useState<boolean>(false)
  const [images, setImages] = useState([])
  const [date, setDate] = useState('Selecionar Data')
  const [countImage, setCountImage] = useState(0)
  function handleBackButtonPress() {}
  function handleHasPrecipitation(state: boolean) {
    setHasPrecipitation(state)
  }

  function onSubmit(data: FormData) {
    if (date === 'Selecionar Data') {
      Toast.show({
        position: 'top',
        type: 'error',
        text1: 'Ops',
        text2: 'A data é obrigatória'
      })

      return
    }
    reset()
    setDate('')
    Alert.alert('Dados enviados, direcionando para listagem')
  }

  async function loadData() {
    let currentData = []
    const items = await AsyncStorage.getItem('@IMAGE')
    currentData = items ? JSON.parse(items) : []
    setImages(currentData)
    console.log(images)
  }

  useEffect(() => {
    loadData()
  }, [countImage])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <Container>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Form>
              <SubContainer>
                <Label title="Campo de produção:" />
                <FieldProduction>'aaaaaa'</FieldProduction>
                <Divider />
                <Label title="Data:" />
                <DatePiker date={date} setDate={setDate} />
                <Divider />
                <Label title="Área do Campo:" />
                <InputForm
                  error={errors.area?.message}
                  control={control}
                  name="area"
                  placeholder="Digite"
                  keyboardType="numeric"
                />
                <Divider />
                <Label title=" Produção Estimada (SCS 60KG/HA):" />
                <InputForm
                  error={errors.totalProduction?.message}
                  control={control}
                  name="totalProduction"
                  placeholder="Digite"
                  keyboardType="numeric"
                />
                <Divider />
                <Label title="Produção Estimada (Ton):" />
                <InputForm
                  error={errors.totalProductionTon?.message}
                  control={control}
                  name="totalProductionTon"
                  placeholder="Digite"
                  keyboardType="numeric"
                />
                <Divider />
                <Label title="Observações:" />
                <InputForm
                  error={errors.observations?.message}
                  control={control}
                  name="observations"
                  editable
                  maxLength={100}
                  multiline
                />
                <Divider />

                <Divider />
                <Label title="Imagens:" />
                <ImageButtons setImageCount={setCountImage} imageCount={countImage} />
                {countImage > 0 && <Gallery images={images} />}
                <Label title="Audios:" />
                <AudioButton />
                <Divider />
              </SubContainer>
            </Form>
          </ScrollView>
        </Container>
      </>
    </TouchableWithoutFeedback>
  )
}
