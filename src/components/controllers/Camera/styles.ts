import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const Container = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  flex: 1;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`
export const ButtonsContainer = styled.View`
  align-self: center;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const TakePicture = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  bottom: 0px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`
export const SwipeType = styled.TouchableOpacity`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  bottom: 0px;
  border-radius: ${RFValue(50)}px;
  margin-right: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
`
export const CloseCamera = styled.TouchableOpacity`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  bottom: 0px;
  border-radius: ${RFValue(50)}px;
  margin-left: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
`
export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
`
