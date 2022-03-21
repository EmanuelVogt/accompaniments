import React, { useState } from 'react'
import { Switch } from 'react-native'

import { Container, Label } from './styles'

interface Props {
  label: string
  setState: (state: boolean) => void
}

export function SwitchButton({ label, setState }: Props) {
  const [isEnabled, setIsEnabled] = useState(false)
  function toggleSwitch() {
    setIsEnabled((previousState) => !previousState)
  }
  setState(isEnabled)
  return (
    <Container>
      <Label>{label}</Label>
      <Switch
        trackColor={{ false: 'rgba(44, 89, 143, 0.4)', true: 'rgba(44, 89, 143, 0.4)' }}
        thumbColor={isEnabled ? '#2c8a8f' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  )
}
