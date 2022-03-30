import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import React, { useCallback, useEffect, useState } from 'react'
import { Modal, SafeAreaView, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'

import { useDatabaseConnection } from '../../database'
import { RootStackScreenProps } from '../../types/navigation'
import { CameraOffIcon, IconTwo, Input } from './styles'

interface Props extends RootStackScreenProps<'Camera'> {}

export function OpenCamera({ navigation, route }: Props) {
  const { imagesRepository } = useDatabaseConnection()
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [image, setImage] = useState(null)
  const [camera, setCamera] = useState(null)
  const [openImage, setOpenImage] = useState(false)
  const [description, setDescription] = useState('')
  const [status, requestPermission] = MediaLibrary.usePermissions()
  const [cameraRollUri, setCameraRollUri] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
    ;(async () => {
      const { status } = await MediaLibrary.getPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (!status) {
    requestPermission()
  }

  function handleClosePictureModal() {
    setImage(null)
    setOpenImage(false)
  }

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  async function handleSavePicture() {
    const imageSubmit = { uri: image, description }
    await imagesRepository.create({ uri: imageSubmit.uri, description: imageSubmit.description })
  }

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.6, base64: true, skipProcessing: true }
      const data = await camera.takePictureAsync(options)
      setImage(data.uri)
      setOpenImage(true)
    }
  }

  return (
    <SafeAreaView style={styled.container}>
      <Camera style={{ flex: 1 }} type={type} ref={setCamera} ratio="4:3">
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ position: 'absolute', bottom: 20, left: 20 }}
            onPress={() =>
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }
          >
            <IconTwo name="camera-switch" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: 'absolute', bottom: 20, right: 20 }}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <CameraOffIcon name="camera-off" />
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={styled.button} onPress={takePicture}>
        <IconTwo name="camera-plus" />
      </TouchableOpacity>
      {image && (
        <Modal animationType="slide" transparent={false} visible={openImage}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <Input
              placeholder="Detalhes da imagem"
              keyboardType="default"
              onChangeText={(e) => {
                setDescription(e)
              }}
            />
            <View style={{ margin: 10, flexDirection: 'row' }}>
              <TouchableOpacity style={{ margin: 10 }} onPress={handleClosePictureModal}>
                <IconTwo name="close" />
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 10 }} onPress={handleSavePicture}>
                <IconTwo name="check-circle" />
              </TouchableOpacity>
            </View>
            <Image
              style={{ width: '100%', height: 300, borderRadius: 20 }}
              source={{ uri: image }}
            ></Image>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  )
}

const styled = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 20,
    borderRadius: 10,
    height: 50
  }
})
