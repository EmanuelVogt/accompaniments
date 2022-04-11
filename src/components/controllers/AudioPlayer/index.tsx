/* eslint-disable react-hooks/exhaustive-deps */
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Slider from '@react-native-community/slider'
import { Audio } from 'expo-av'
import { AVPlaybackStatus } from 'expo-av/build/AV.types'
import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'

import {
  Container,
  PlayerIcon,
  PlayerContainer,
  DeleteButton,
  PlayerButton,
  SoudsList,
  DeleteIcon,
  CloseModalButton,
  CloseModalIcon
} from './styles'

export function AudioPlayer() {
  const [audios, setAudios] = useState([])
  const asyncStorage = useAsyncStorage('@SR-CAMPO-AUDIO')
  const [isModalVisible, setModalVisible] = useState(false)
  const [onSlide, setOnSlide] = useState(false)
  const [playbackObject, setPlaybackObject] = useState<Audio.Sound>()
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus>()
  const [currentPosition, setCurrentPosition] = useState(0)
  const [audioDuration, setAudioDuration] = useState(0)

  const handleOpenAudioModal = async (asset?: string) => {
    if (playbackObject && !playbackStatus) {
      const status = await playbackObject.loadAsync(
        { uri: asset },
        {
          shouldPlay: true,
          isLooping: true,
          seekMillisToleranceAfter: 1000,
          seekMillisToleranceBefore: 1000,
          progressUpdateIntervalMillis: 100,
          shouldCorrectPitch: false
        }
      )
      if (status.isLoaded) {
        setAudioDuration(status.durationMillis)
      }
      setModalVisible(!isModalVisible)
      setPlaybackStatus(status)

      return
    }

    if (playbackObject && playbackStatus) {
      await playbackObject.stopAsync()
      const status = await playbackObject.unloadAsync()
      setModalVisible(!isModalVisible)
      console.log(status)
      setPlaybackStatus(undefined)
      setCurrentPosition(0)
    }
  }

  async function getCurrentPosition() {
    const status = await playbackObject.getStatusAsync()
    if (status.isLoaded) {
      setCurrentPosition(status.positionMillis)
    }
  }
  if (playbackStatus && !onSlide) {
    setTimeout(async () => {
      await getCurrentPosition()
    }, 0)
  }

  function getSlideValue() {
    const result = currentPosition / audioDuration
    return Number(result.toFixed(2))
  }

  async function handleStopAudio(val: number) {
    setOnSlide(true)
    const status = await playbackObject.getStatusAsync()
    if (status.isLoaded) {
      const pauseStatus = await playbackObject.pauseAsync()
      setPlaybackStatus(pauseStatus)
    }
  }

  async function handlePlayAuido(val: number) {
    setOnSlide(false)
    const status = await playbackObject.getStatusAsync()
    if (status.isLoaded) {
      const playStatus = await playbackObject.playFromPositionAsync(val * audioDuration, {
        toleranceMillisAfter: 1000,
        toleranceMillisBefore: 1000
      })
      setPlaybackStatus(playStatus)
    }
  }

  function millisToMinutesAndSeconds(millis: number) {
    const formatToDate = new Date(millis)
    const minutes = formatToDate.getMinutes()
    const seconds = formatToDate.getSeconds()

    if (minutes < 10 && seconds < 10) {
      return `0${formatToDate.getMinutes()}:0${formatToDate.getSeconds()}`
    }

    if (seconds < 10) {
      return `${minutes}:0${seconds}`
    }

    return `${minutes}:${seconds}`
  }
  async function loadAudios() {
    const audios = await asyncStorage.getItem()
    const audiosParsed = audios ? JSON.parse(audios) : []
    setAudios(audiosParsed)
  }

  useEffect(
    useCallback(() => {
      loadAudios()
    }, [loadAudios]),
    []
  )

  useEffect(() => {
    if (!playbackObject) {
      setPlaybackObject(new Audio.Sound())
    }
  }, [])
  if (audios.length !== 0) {
    return (
      <>
        <SoudsList>
          {audios.map((item) => (
            <Container key={item.id}>
              <PlayerContainer>
                <PlayerButton onPress={() => handleOpenAudioModal(item.uri)}>
                  <PlayerIcon name="playcircleo" />
                </PlayerButton>
                <DeleteButton>
                  <DeleteIcon name="trash" />
                </DeleteButton>
              </PlayerContainer>
            </Container>
          ))}
        </SoudsList>
        <Modal isVisible={isModalVisible} animationIn="bounce" animationOut="bounceOut">
          <View
            style={{
              backgroundColor: '#f3f3f3',
              width: '100%',
              height: 140,
              borderRadius: 5,
              padding: 5
            }}
          >
            <CloseModalButton
              onPress={() => {
                handleOpenAudioModal()
              }}
            >
              <CloseModalIcon name="leftcircleo" />
            </CloseModalButton>
            <View style={{ width: '100%', marginTop: 45 }}>
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                value={getSlideValue()}
                maximumValue={1}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onValueChange={(val) => {
                  setCurrentPosition(Number((val * audioDuration).toFixed(0)))
                }}
                onSlidingStart={async (val) => {
                  await handleStopAudio(val)
                }}
                onSlidingComplete={async (val) => {
                  await handlePlayAuido(val)
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 15,
                  marginRight: 15
                }}
              >
                <Text>{millisToMinutesAndSeconds(currentPosition)}</Text>
                <Text>{millisToMinutesAndSeconds(audioDuration)}</Text>
              </View>
            </View>
          </View>
        </Modal>
      </>
    )
  } else {
    return null
  }
}
