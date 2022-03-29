import AsyncStorage from '@react-native-async-storage/async-storage'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  Modal,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'

import { CameraOffIcon, Clip, Container, Icon, Input, Photo, IconTwo } from './styles'
export type ImageType = {
  uri: string
  description?: string
}

interface Props {
  setImageCount: Dispatch<SetStateAction<number>>
  imageCount: number
}
export function ImageButtons({ setImageCount, imageCount }: Props) {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [image, setImage] = useState(null)
  const [camera, setCamera] = useState(null)
  const [openImage, setOpenImage] = useState(false)
  const [description, setDescription] = useState('')
  const [modalCameraState, setModalCameraState] = useState(false)
  const [status, requestPermission] = MediaLibrary.usePermissions()
  const [cameraRollUri, setCameraRollUri] = useState(null)

  if (!status) {
    requestPermission()
  }

  function handleClosePictureModal() {
    setImage(null)
    setOpenImage(false)
  }

  async function handleSavePicture() {
    const imageSubmit = { uri: image, description }
    try {
      const cachedAsset = await MediaLibrary.createAssetAsync(imageSubmit.uri)
      const album = await MediaLibrary.getAlbumAsync('sr-campo')
      if (album === null) {
        console.log('estou aqui')
        await MediaLibrary.createAlbumAsync('sr-campo', cachedAsset)
        setCameraRollUri(cachedAsset.uri)
      } else {
        const assetAdded = await MediaLibrary.addAssetsToAlbumAsync(cachedAsset, album.id)
        if (assetAdded === true) {
        } else {
          console.log('ASSET ADD ERROR')
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

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

  function handleOpenCamera() {
    setModalCameraState(!modalCameraState)
  }

  return (
    <>
      <Container>
        <Photo onPress={handleOpenCamera}>
          <Icon name="camera" />
        </Photo>
        <Clip>
          <Icon name="paperclip" />
        </Clip>
      </Container>
      <Modal visible={modalCameraState} animationType="slide">
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
                onPress={() => handleOpenCamera()}
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
      </Modal>
    </>
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
