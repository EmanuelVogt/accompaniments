import AsyncStorage from '@react-native-async-storage/async-storage'
import { Camera } from 'expo-camera'
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native'

import { Icon, CameraOffIcon, Input } from './styles'
interface Props {
  setClose: () => void
}

export function OpenCamera({ setClose }: Props) {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [image, setImage] = useState(null)
  const [camera, setCamera] = useState(null)
  const [openImage, setOpenImage] = useState(false)
  const [description, setDescription] = useState('')

  function handleClosePictureModal() {
    setImage(null)
    setOpenImage(false)
  }

  async function handleSavePicture() {
    const imageSubmit = { uri: image, description }
    try {
      const items = await AsyncStorage.getItem('@IMAGE')
      const currentData = items ? JSON.parse(items) : []
      const dataFormated = [...currentData, imageSubmit]
      await AsyncStorage.setItem('@IMAGE', JSON.stringify(dataFormated))
    } catch (e) {}
    setOpenImage(false)
  }

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.6, base64: true, skipProcessing: true }
      const data = await camera.takePictureAsync(options)
      setImage(data.uri)
      setOpenImage(true)
    }
  }

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
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
            <Icon name="camera-switch" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: 'absolute', bottom: 20, right: 20 }}
            onPress={() => setClose()}
          >
            <CameraOffIcon name="camera-off" />
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={styled.button} onPress={takePicture}>
        <Icon name="camera-plus" />
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
                <Icon name="close" />
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 10 }} onPress={handleSavePicture}>
                <Icon name="check-circle" />
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
