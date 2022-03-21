import { FontAwesome5 } from '@expo/vector-icons'
import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select'

import { pickerSelectStyles, Icon } from './styles'

interface Item {
  key: any
  name: any
}
interface Props {
  setItem: (item: Item) => void
  items: Item[]
  valueItem: any
}
export function PikerSelect({ items, setItem, valueItem }: Props) {
  const placeholder = {
    label: 'Selecione a Phenologia',
    value: null,
    color: 'black'
  }

  return (
    <RNPickerSelect
      placeholder={placeholder}
      items={items.map((item) => {
        return { label: item.name, value: item.key }
      })}
      onValueChange={(value) => {
        if (value) {
          setItem(value)
        } else {
          setItem({ name: 'Selecione...', key: '' })
        }
      }}
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          top: 20,
          right: 12
        }
      }}
      value={valueItem}
      useNativeAndroidPickerStyle={false}
      Icon={() => {
        return <Icon name="chevron-down" size={14} color="black" />
      }}
    />
  )
}
