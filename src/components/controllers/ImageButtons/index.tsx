import React from 'react'

import { RootStackScreenProps } from '../../../types/navigation'
import { Clip, Container, Icon, Photo } from './styles'
export type ImageType = {
  uri: string
  description?: string
}
interface Props extends RootStackScreenProps<'AccompanimentForm'> {
  formName: string
}
export function ImageButtons({ navigation, formName }: Props) {
  return (
    <>
      <Container>
        <Photo
          onPress={() => {
            navigation.navigate('Camera', {
              formName
            })
          }}
        >
          <Icon name="camera" />
        </Photo>
        <Clip>
          <Icon name="paperclip" />
        </Clip>
      </Container>
    </>
  )
}
