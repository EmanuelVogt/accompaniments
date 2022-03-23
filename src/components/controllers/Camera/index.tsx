import { Camera } from 'expo-camera'
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'

import { Container, ButtonsContainer, TakePicture, CloseCamera, SwipeType, Icon } from './styles'
interface Props {
  setClose: () => void
}
export function OpenCamera({ setClose }: Props) {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [image, setImage] = useState(null)
  const [camera, setCamera] = useState(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  function handleCloseCamera() {
    setClose()
  }
  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const takePicture = async () => {
    setButtonDisabled(true)
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
    }
  }
  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <Camera
      type={type}
      style={{ flex: 1, height: '100%', width: '100%' }}
      ref={(ref) => setCamera(ref)}
      ratio={'1:1'}
    >
      <Container>
        <ButtonsContainer>
          <SwipeType
            style={{ backgroundColor: '#fff' }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }}
          >
            <Icon name="camera-switch-outline" />
          </SwipeType>
          <TakePicture
            style={{ backgroundColor: '#fff' }}
            disabled={buttonDisabled}
            onPress={() => {
              takePicture()
            }}
          >
            <Icon name="camera" />
          </TakePicture>
          <CloseCamera style={{ backgroundColor: '#fff' }} onPress={handleCloseCamera}>
            <Icon name="logout" />
          </CloseCamera>
        </ButtonsContainer>
      </Container>
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </Camera>
  )
}
