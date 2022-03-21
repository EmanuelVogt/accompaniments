import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input } from '../Input'

interface Props extends TextInputProps {
  control: Control
  name: string
  error: string
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input error={error} onBlur={onBlur} onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
    </>
  )
}
