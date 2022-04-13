import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Slider from '@react-native-community/slider'
import { Audio } from 'expo-av'
import React, { useRef, useState } from 'react'
import { View, Text, Alert } from 'react-native'
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
  CloseModalIcon,
  PlayPauseButton,
  PlayIcon,
  PauseIcon
} from './styles'

interface Audios {
  id: string
  uri: string
}
interface Props {
  audios: Audios[]
  handleDeletImage: (id: string) => void
}
export function AudioPlayer({ audios, handleDeletImage }: Props) {
  const [isModalVisible, setModalVisible] = useState(false)

  const sound = useRef<Audio.Sound>(new Audio.Sound())

  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [value, setValue] = useState(0)
  const [durationMillis, setDurationMillis] = useState(0)
  const [valueMillis, setValueMillis] = useState(0)

  async function handlePlayAudioModal(asset?: string) {
    const status = await sound.current.getStatusAsync()
    if (status.isLoaded === false) {
      try {
        const loadAudio = await sound.current.loadAsync({ uri: asset }, {}, true)
        if (loadAudio.isLoaded === false) {
          Alert.alert('Error', 'Invalid Audio')
        } else {
          sound.current.setOnPlaybackStatusUpdate(updateStatus)
          setDuration(loadAudio.durationMillis)
          setDurationMillis(loadAudio.durationMillis)
          setValueMillis(loadAudio.positionMillis)
          sound.current.playAsync()
          setPlaying(true)
          setModalVisible(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const playPauseAudio = async () => {
    try {
      const status = await sound.current.getStatusAsync()
      if (status.isLoaded) {
        if (status.isPlaying === false) {
          setValueMillis(status.positionMillis)
          sound.current.playAsync()
          setPlaying(true)
        } else {
          sound.current.pauseAsync()
          setValueMillis(status.positionMillis)
          setPlaying(false)
        }
      }
    } catch (error) {
      setPlaying(false)
    }
  }

  const pauseAudio = async () => {
    try {
      const status = await sound.current.getStatusAsync()
      if (status.isLoaded) {
        sound.current.pauseAsync()
        setPlaying(false)
      }
    } catch (e) {}
  }

  const seekUpdate = async (data) => {
    try {
      const status = await sound.current.getStatusAsync()
      if (status.isLoaded === true) {
        const result = (data / 100) * duration
        await sound.current.playFromPositionAsync(Math.round(result))
        setPlaying(true)
      }
    } catch (error) {
      console.log('Error')
    }
  }

  const updateStatus = async (audio) => {
    try {
      if (audio.didJustFinish) {
        resetPlayerAndCloseModal()
      } else if (audio.positionMillis) {
        if (audio.durationMillis) {
          setValue((audio.positionMillis / audio.durationMillis) * 100)
          setValueMillis(audio.positionMillis)
        }
      }
    } catch (error) {
      console.log('Error')
    }
  }

  const resetPlayerAndCloseModal = async () => {
    try {
      const status = await sound.current.getStatusAsync()
      if (status.isLoaded === true) {
        setValue(0)
        setPlaying(false)
        await sound.current.setPositionAsync(0)
        await sound.current.stopAsync()
        await sound.current.unloadAsync()
        setModalVisible(false)
      }
    } catch (error) {
      console.log('Error')
    }
  }

  function millisToMinutesAndSeconds(millis: number) {
    console.log(millis)
    const formatToDate = new Date(millis)
    const minutes = formatToDate.getMinutes()
    const seconds = formatToDate.getSeconds()
    if (minutes < 10 && seconds < 10) {
      return `0${formatToDate.getMinutes()}:0${formatToDate.getSeconds()}`
    }
    if (seconds < 10) {
      return `${minutes}:0${seconds}`
    }
    if (minutes === 0) {
      return `00:${seconds}`
    }
    return `${minutes}:${seconds}`
  }

  return (
    <>
      <SoudsList>
        {audios.map((item) => (
          <Container key={item.id}>
            <PlayerContainer>
              <PlayerButton onPress={() => handlePlayAudioModal(item.uri)}>
                <PlayerIcon name="playcircleo" />
              </PlayerButton>
              <DeleteButton onPress={() => handleDeletImage(item.id)}>
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
            height: 120,
            borderRadius: 5,
            padding: 5
          }}
        >
          <CloseModalButton
            onPress={() => {
              resetPlayerAndCloseModal()
            }}
          >
            <CloseModalIcon name="leftcircleo" />
          </CloseModalButton>

          <PlayPauseButton onPress={() => playPauseAudio()}>
            {playing ? <PauseIcon name="pausecircleo" /> : <PlayIcon name="playcircleo" />}
          </PlayPauseButton>

          <View style={{ width: '100%', marginTop: 45 }}>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              value={value}
              maximumTrackTintColor="#000000"
              minimumTrackTintColor="#2c8a8f"
              maximumValue={100}
              onSlidingStart={() => pauseAudio()}
              onSlidingComplete={(val) => seekUpdate(val)}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 15,
                marginRight: 15
              }}
            >
              <Text>{millisToMinutesAndSeconds(valueMillis)}</Text>
              <Text>{millisToMinutesAndSeconds(durationMillis)}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}
