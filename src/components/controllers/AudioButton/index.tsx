import { FontAwesome5 } from '@expo/vector-icons'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { Audio } from 'expo-av'
import * as MediaLibrary from 'expo-media-library'
import React, { useState } from 'react'
import uuid from 'react-native-uuid'

import { AudioPlayer } from '../Player'
import { Container, Icon, AudioSubContainer } from './styles'

interface Audios {
  id: string
  uri: string
}
export function AudioButton() {
  const [recording, setRecording] = useState<Audio.Recording>()
  const [isRecording, setIsRecording] = useState<boolean>()
  const [audios, setAudios] = useState<Audios[]>()
  const asyncStorage = useAsyncStorage('@SR-CAMPO-AUDIO')

  async function startRecording() {
    try {
      setIsRecording(true)
      await Audio.requestPermissionsAsync()
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      })
      console.log('Starting recording..')
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      )
      setRecording(recording)
      console.log('Recording started')
    } catch (err) {
      console.error('Failed to start recording', err)
    }
  }

  async function handleDeletImage(val: string) {
    const audios = await asyncStorage.getItem()
    const audiosParsed = audios ? JSON.parse(audios) : []
    const audioDeleted = audiosParsed.filter((index: any) => {
      return index.id !== val
    })
    setAudios(audioDeleted)
    await asyncStorage.setItem(JSON.stringify(audioDeleted))
  }

  async function stopRecording() {
    setIsRecording(false)
    setRecording(undefined)
    await recording.stopAndUnloadAsync()
    const uri = recording.getURI()
    const assetAudio = await MediaLibrary.createAssetAsync(uri)
    const albumAsync = await MediaLibrary.getAlbumAsync('sr-campo')
    if (albumAsync) {
      await MediaLibrary.addAssetsToAlbumAsync([assetAudio], albumAsync)
    }
    const audios = await asyncStorage.getItem()
    const audiosParsed = audios ? JSON.parse(audios) : []

    const audioSubmit = { uri, id: uuid.v4() }
    const dataSubmit = [...audiosParsed, audioSubmit]
    setAudios(dataSubmit)
    await asyncStorage.setItem(JSON.stringify(dataSubmit))
  }

  return (
    <>
      <Container>
        <AudioSubContainer
          delayPressIn={300}
          onPressIn={() => startRecording()}
          onPressOut={() => stopRecording()}
        >
          {isRecording ? (
            <FontAwesome5 name="record-vinyl" size={16} color="red" />
          ) : (
            <Icon name="microphone" />
          )}
        </AudioSubContainer>
      </Container>
      {audios && <AudioPlayer audios={audios} handleDeletImage={handleDeletImage} />}
    </>
  )
}
