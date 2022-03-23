import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: 98%;
  border-radius: 5px;
  padding: ${RFValue(10)}px ${RFValue(10)}px;
`
export const Header = styled.View`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`
export const SubContainer = styled.View`
  height: ${RFValue(400)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`
export const ImageContainer = styled.View`
  padding: ${RFValue(8)}px ${RFValue(8)}px;
  border-radius: 5px;
`
export const FieldImage = styled.Image`
  height: ${RFValue(180)}px;
  width: 100%;
`
export const InfosContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`
export const FieldInfo = styled.View`
  flex: 0.3;
  height: ${RFValue(80)}px;
  margin: ${RFValue(8)}px ${RFValue(8)}px;
`
export const Icon = styled(MaterialCommunityIcons)`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(26)}px;
`
export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`
export const FloatActionButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(50)}px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  justify-content: center;
`

export const IconFloatActionButton = styled(MaterialCommunityIcons)`
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(26)}px;
`
