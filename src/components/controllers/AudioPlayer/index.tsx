import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Slider from '@react-native-community/slider'
import { Audio } from 'expo-av'
import React, { useEffect, useState } from 'react'

import {
  Container,
  PlayerIcon,
  PlayerContainer,
  DeleteButton,
  PlayerButton,
  SoudsList,
  DeleteIcon
} from './styles'

export function AudioPlayer() {
  const [audios, setAudios] = useState([])
  const asyncStorage = useAsyncStorage('@SR-CAMPO-AUDIO')
  function handleOpenActionSheet(asset: string) {}
  async function loadAudios() {
    const audios = await asyncStorage.getItem()
    const audiosParsed = audios ? JSON.parse(audios) : []
    setAudios(audiosParsed)
  }
  useEffect(() => {
    loadAudios()
  })

  if (audios.length !== 0) {
    return (
      <SoudsList>
        {audios.map((item) => (
          <Container key={item.id}>
            <PlayerContainer>
              <PlayerButton onPress={() => handleOpenActionSheet(item.uri)}>
                <PlayerIcon name="playcircleo" />
              </PlayerButton>
              <DeleteButton>
                <DeleteIcon name="trash" />
              </DeleteButton>
            </PlayerContainer>
          </Container>
        ))}
      </SoudsList>
    )
  } else {
    return null
  }
}
