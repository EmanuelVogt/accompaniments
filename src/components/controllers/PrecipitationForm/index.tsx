import React, { useState } from 'react'

import { DatePiker } from '../form/DatePiker'
import { Input } from '../form/Input'
import { Label } from '../form/Label'
import { Container } from './styles'

export function PrecipitationForm() {
  const [date, setDate] = useState('Selecionar Data')
  const [volum, setVolum] = useState('')

  console.log(volum)
  return (
    <Container>
      <Label title="Data da Precipitação:" style={{ color: '#Ffffff' }} />
      <DatePiker date={date} setDate={setDate} />
      <Label title="Quantidade em mm:" style={{ color: '#Ffffff' }} />
      <Input
        placeholder="Digite"
        keyboardType="numeric"
        onChangeText={(e) => {
          setVolum(e)
        }}
      />
    </Container>
  )
}
