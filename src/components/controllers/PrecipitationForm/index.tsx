import React, { useState } from 'react'
import { Switch } from 'react-native'

import { DatePiker } from '../form/DatePiker'
import { Input } from '../form/Input'
import { Label } from '../form/Label'
import { Container, SwithContainer } from './styles'

export function PrecipitationForm() {
  const [date, setDate] = useState('Selecionar Data')
  const [volum, setVolum] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <>
      <SwithContainer>
        <Label title="Houve precipitação?:" />
        <Switch
          style={{ marginTop: 20 }}
          trackColor={{ false: '#ffffff', true: '#969cb2' }}
          thumbColor={isEnabled ? '#2c8a8f' : '#969cb2'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SwithContainer>
      {isEnabled && (
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
      )}
    </>
  )
}
