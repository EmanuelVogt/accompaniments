import { FontAwesome5 } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import * as MediaLibrary from 'expo-media-library'
import React, { useState } from 'react'

import { Container, Icon, AudioSubContainer } from './styles'
export function AudioButton() {
  const [recording, setRecording] = useState<Audio.Recording>()
  const [isRecording, setIsRecording] = useState<boolean>()
  async function startRecording() {
    try {
      setIsRecording(true)
      console.log('Requesting permissions..')
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
  async function stopRecording() {
    setIsRecording(false)
    console.log('Stopping recording..')
    setRecording(undefined)
    await recording.stopAndUnloadAsync()
    const uri = recording.getURI()
    const assetAudio = await MediaLibrary.createAssetAsync(uri)
    const albumAsync = await MediaLibrary.getAlbumAsync('sr-campo')
    if (albumAsync) {
      await MediaLibrary.addAssetsToAlbumAsync([assetAudio], albumAsync)
    }
  }
  return (
    <Container>
      <AudioSubContainer onPressIn={() => startRecording()} onPressOut={() => stopRecording()}>
        {isRecording ? (
          <FontAwesome5 name="record-vinyl" size={16} color="red" />
        ) : (
          <Icon name="microphone" />
        )}
      </AudioSubContainer>
    </Container>
  )
}
