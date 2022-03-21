import React from 'react'

import { Header, Title, Icon } from './styles'
interface Props {
  title: string
  iconName: string
}
export function HeaderTitle({ title, iconName }: Props) {
  return (
    <Header>
      <Title> {title} </Title>
      <Icon name={iconName} />
    </Header>
  )
}
