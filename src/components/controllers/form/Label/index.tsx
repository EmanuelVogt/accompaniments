import React from 'react'
import { TextProps } from 'react-native'

import { Text } from './styles'
interface Props extends TextProps {
  title: string
}
export function Label({ title, ...props }: Props) {
  return <Text {...props}> {title} </Text>
}
