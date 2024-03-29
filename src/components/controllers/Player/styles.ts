import { AntDesign, Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: 5px;
  margin-bottom: 5px;
`

export const PlayerContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const PlayerButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  margin-right: 10px;
`
export const PlayerIcon = styled(AntDesign)`
  font-size: 35px;
  color: #2c8a8f;
`

export const SoudsList = styled.ScrollView`
  width: 100%;
`
export const DeleteButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  margin-right: 10px;
`
export const DeleteIcon = styled(Entypo)`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.attention_light};
`

export const CloseModalButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 10px;
`

export const CloseModalIcon = styled(AntDesign)`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.primary};
`

export const PlayPauseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 10px;
`
export const PlayIcon = styled(AntDesign)`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.primary};
`
export const PauseIcon = styled(AntDesign)`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.primary};
`
