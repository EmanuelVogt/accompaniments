import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native'
import Toast from 'react-native-toast-message'
import * as Yup from 'yup'

import { AudioButton } from '../controllers/AudioButton'
import { ImageButtons } from '../controllers/ImageButtons'
import { PrecipitationForm } from '../controllers/PrecipitationForm'
import { Button } from '../controllers/form/Button'
import { DatePiker } from '../controllers/form/DatePiker'
import { InputForm } from '../controllers/form/InputForm'
import { Label } from '../controllers/form/Label'
import { SwitchButton } from '../controllers/form/Switch'
import { Container, Form, SubContainer, Divider, FieldProduction } from './styles'
import { Gallery } from '../controllers/Gallery'

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

export function AccompanimentsForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({
    resolver: yupResolver(schema)
  })
  const [hasPrecipitation, setHasPrecipitation] = useState<boolean>(false)

  const [date, setDate] = useState('Selecionar Data')

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
                <SwitchButton label="Houve precipitação?" setState={handleHasPrecipitation} />
                {hasPrecipitation && <PrecipitationForm />}
                <Divider />
                <Label title="Imagens:" />
                <ImageButtons />
                <Gallery />
                <Label title="Audios:" />
                <AudioButton />
                <Divider />
              </SubContainer>
              <Button onPress={handleSubmit(onSubmit)} title="Cadastrar" />
            </Form>
          </ScrollView>
        </Container>
      </>
    </TouchableWithoutFeedback>
  )
}
